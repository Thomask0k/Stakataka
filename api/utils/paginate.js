export default function pagination(items, page, limit) {
  return {
    total: items.length,
    lastPage: Math.ceil(items.length / limit),
    firstPage: 1,
    page,
    limit,
    items: items.splice((page - 1) * limit, limit),
  };
}
