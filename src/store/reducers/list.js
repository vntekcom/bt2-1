const initilState = [
  {
    id: 1,
    name: "Bắp rang 60oz - Phô mai",
    image: "http://thietbimayg8.com/wp-content/uploads/2017/01/huong-dan-lam-bap-rang-bo-de-kinh-doanh.jpg",
    price: 55000,
    cat: 1
  },
  {
    id: 2,
    name: "Combo 1",
    image: "https://media.lamsao.com//Data//quynhdtn/20032015/9_thuc_pham_an_khi_mang_thai_khien_con_kem_thong_minh_5.jpg",
    price: 79000,
    cat: 2
  },
  {
    id: 3,
    name: "Combo 2",
    image: "https://media.lamsao.com//Data//quynhdtn/20032015/9_thuc_pham_an_khi_mang_thai_khien_con_kem_thong_minh_5.jpg",
    price: 95000,
    cat: 2
  },
  {
    id: 4,
    name: "Combo 3",
    image: "https://media.lamsao.com//Data//quynhdtn/20032015/9_thuc_pham_an_khi_mang_thai_khien_con_kem_thong_minh_5.jpg",
    price: 105000,
    cat: 2
  },
  {
    id: 5,
    name: "Combo 4",
    image: "https://media.lamsao.com//Data//quynhdtn/20032015/9_thuc_pham_an_khi_mang_thai_khien_con_kem_thong_minh_5.jpg",
    price: 209000,
    cat: 2
  },
  {
    id: 6,
    name: "Coke 220z",
    image: "https://images-na.ssl-images-amazon.com/images/I/51uJdR27f7L.jpg",
    price: 25000,
    cat: 3
  },
  {
    id: 7,
    name: "Coke 32oz",
    image: "https://images-na.ssl-images-amazon.com/images/I/51uJdR27f7L.jpg",
    price: 35000,
    cat: 3
  }
];

const listReducer = (state = initilState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default listReducer;
