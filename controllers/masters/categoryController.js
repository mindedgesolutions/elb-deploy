import { StatusCodes } from "http-status-codes";
import pool from "../../db.js";
import { paginationLogic } from "../../utils/functions.js";
import dayjs from "dayjs";
import slug from "slug";

// ------
export const pageCategories = async (req, res) => {
  const { page, search, parent } = req.query;
  const pagination = paginationLogic(page, null);

  const searchStr = search ? ` and (category ilike '%${search.trim()}%')` : ``;
  const searchDrp = parent ? ` and parent_id=${parent}` : ``;

  const data = await pool.query(
    `
    with recursive category_tree AS (
      select
        id, 
        category, 
        parent_id,
        category as pcategory,
        is_active,
        has_brand,
        0 as level
      from master_categories where parent_id is null
      union all
      select
        c.id, 
        c.category,
        c.parent_id,
        ct.category as pcategory,
        c.is_active,
        c.has_brand,
        ct.level + 1
      from master_categories c
      inner join category_tree ct on c.parent_id = ct.id
    )
    select
      id,
      category,
      parent_id,
      pcategory,
      is_active,
      has_brand,
      level
    from category_tree
    where id is not null ${searchStr} ${searchDrp}
    order by pcategory, level, parent_id, id offset $1 limit $2`,
    [pagination.offset, pagination.pageLimit]
  );

  const records = await pool.query(
    `select c.* from master_categories as c where c.id is not null ${searchStr} ${searchDrp}`,
    []
  );
  const totalPages = Math.ceil(records.rowCount / pagination.pageLimit);
  const meta = {
    totalPages: totalPages,
    currentPage: pagination.pageNo,
    totalRecords: records.rowCount,
  };

  res.status(StatusCodes.OK).json({ data, meta });
};

// ------
export const allCategories = async (req, res) => {
  const data = await pool.query(
    `select * from master_categories order by category`,
    []
  );

  res.status(StatusCodes.OK).json({ data });
};

// ------
export const addCategory = async (req, res) => {
  const { isParent, parentId, category, hasBrand } = req.body;

  const pid = !isParent ? parentId : null;

  const timeStamp = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
  const categorySlug = slug(category);

  const data = await pool.query(
    `insert into master_categories(category, slug, parent_id, created_at, updated_at, has_brand) values($1, $2, $3, $4, $5, $6)`,
    [category.trim(), categorySlug, pid, timeStamp, timeStamp, hasBrand]
  );

  res.status(StatusCodes.CREATED).json({ data: `success` });
};

// ------
export const editCategory = async (req, res) => {
  const { id } = req.params;
  const { isParent, parentId, category, hasBrand } = req.body;

  const pid = !isParent ? parentId : null;

  const timeStamp = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
  const categorySlug = slug(category);

  const data = await pool.query(
    `update master_categories set category=$1, slug=$2, parent_id=$3, updated_at=$4, has_brand=$6 where id=$5`,
    [category.trim(), categorySlug, pid, timeStamp, id, hasBrand]
  );

  res.status(StatusCodes.ACCEPTED).json({ data: `success` });
};

// ------
export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const timeStamp = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");

  await pool.query(
    `update master_categories set is_active=false, deleted_at=$1 where id=$2`,
    [timeStamp, id]
  );

  res.status(StatusCodes.NO_CONTENT).json({ data: `success` });
};
