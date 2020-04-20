const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: '标题A',
      content: 'lorem  qweqe ',
      author: 'zhangsan',
      createTime: 1587370596628,
    },
    {
      id: 2,
      title: '标题B',
      content: 'lorem  qweqe 123',
      author: 'lisi',
      createTime: 1587370599628,
    },
  ];
};

const getDetail = (id) => {
  return {
    id,
    title: 'test-title',
    createTime: 1587370596628,
    author: 'zhangsan',
    content: '123ewqeqwesadqwweqeeqew',
  };
};

const createBlog = (params) => {
  return null;
};

module.exports = {
  getList,
  getDetail,
  createBlog,
};
