// tạo một mảng với các dữ liệu như sau
let products = [
  {
    id: 1,
    name: "mèn mén",
    price: 20000,
    quantity: 20,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 2,
    name: "mứt",
    price: 80000,
    quantity: 21,
    category: "món ăn dân tộc Kinh",
  },
  {
    id: 3,
    name: "cơm lam",
    price: 40000,
    quantity: 15,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 4,
    name: "bánh đậu xanh",
    price: 60000,
    quantity: 30,
    category: "món ăn dân tộc Kinh",
  },
];

// khởi tạo giỏ hàng
let cart = [];

// Viết chương trình  cho phép người dùng:

// 1. Hiển thị các sản phẩm theo tên danh mục.
// 2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
//      a. Sản phẩm không có trong cửa hàng hiển thị thông báo.
//      b. Sản phẩm có trong cửa hàng
//         i. Cho người dùng nhập số lượng sản phẩm muốn mua, mua thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
//         ii. Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển thị thông báo.
// 3. Sắp xếp các sản phẩm trong cửa hàng theo giá:
// a. Tăng dần.
// b. Giảm dần.
// 4. Tính số tiền thanh toán trong giỏ hàng.
// 5. Thoát.

//viết các  hàm ở đây
function chon() {
  // 2. chọn sản phẩm bằng cách nhập id sản phẩm
  let id = prompt("mời bạn nhập id sản phẩm: ");
  // 2.1 nếu id sản phẩm k có trong cửa hàng thì in ra là k có thông tin sản phẩm
  if (id == null) {
    alert("không có thông tin sản phẩm này trong danh mục");
  } else {
    // 2.2 nếu sản phẩm có trong cửa hàng
    // 2.2.1 cho người dùng nhập số lượng sản phẩm muốn mua
    let soLuong = prompt("mời bạn nhập số lượng sản phẩm muốn mua: ");

    // 2.2.2 nếu số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ điều kiện sẽ in ra thông báo
    if (
      soLuong == null ||
      soLuong == 0 ||
      soLuong > products.find((product) => product.id == id).quantity
    ) {
      alert("số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ");
    } else {
      // nếu đủ điều kiện thì tiến hành mua và trừ đi số lượng sản phẩm hiện có trong giỏ hàng
      alert("sản phẩm bạn chọn hiện có trong cửa hàng ");
      let product = products.find((product) => product.id == id);
      cart.push(product);
      product.quantity -= soLuong;
      alert("sản phẩm bạn chọn đã được thêm vào giỏ hàng");
    }
  }
}

// soLuong > products.find((product) => product.id == id).quantity

// 3. sắp xếp các sản phẩm trong cửa hàng
// 3.1 sắp xếp theo giá tăng dần
function sapXepTang() {
  products.sort((a, b) => a.price - b.price);
  let ketQua = products
    .map((product) => `Tên: ${product.name}, Giá: ${product.price}`)
    .join("\n");
  alert("Danh sách sản phẩm sau khi sắp xếp theo giá tăng dần: \n" + ketQua);
}
// let ketqua = products.map((product) => `tên: ${product.name}, giá: ${projuct.proce}`.join("\n"))l;

// 3.2 sắp xếp theo giá giảm dần
function sapXepGiam() {
  products.sort((a, b) => b.price - a.price);
  let ketQua = products
    .map((product) => `Tên: ${product.name}, Giá: ${product.price}`)
    .join("\n");
  alert("Danh sách sản phẩm sau khi sắp xếp theo giá tăng dần: \n" + ketQua);
}

// 4. tính số tiền thanh toán trong giỏ hàng
function tinhTien() {
  let tongTien = 0;
  // in các sản phẩm có trong giỏ hàng ra
  let ketQua = cart;
  alert("Danh sách sản phẩm có trong giỏ hàng: \n" + ketQua);

  for (let i = 0; i < cart.length; i++) {
    tongTien += cart.price * cart.quantity;
  }
  alert("tổng tiền thanh toán là: " + tongTien);
}

let aa = true;
let choice;

//in ra menu
let menu = `
------ MENU ------
1. Hiển thị các sản phẩm theo tên danh mục.
2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
      a. Sản phẩm không có trong cửa hàng hiển thị thông báo.
      b. Sản phẩm có trong cửa hàng
         i. Cho người dùng nhập số lượng sản phẩm muốn mua, mua thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
         ii. Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển thị thông báo.
 3. Sắp xếp các sản phẩm trong cửa hàng theo giá:
 a. Tăng dần.
 b. Giảm dần.
 4. Tính số tiền thanh toán trong giỏ hàng.
 5. Thoát.


Lựa chọn của bạn là gì?
`;

while (aa) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      show();
      break;
    case 2:
      chon();
      break;
    case 3:
      let choice1;
      choice1 = prompt("Lựa chọn của bạn là a hoặc b");
      if (choice1 === "a") {
        sapXepTang();
      } else if (choice1 === "b") {
        sapXepGiam();
      } else {
        alert("lựa chọn của bạn k hợp lệ ");
      }
      break;
    case 4:
      tongTien();
      break;
    case 5:
      aa = false;
      alert("Chương trình đã thoát.");
      break;
    default:
      alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
  }
}

function show() {
  let hienThi = prompt("mời bạn nhập vào danh mục cần hiển thị ra : ");
  let result = products.filter((product) => product.category === hienThi);
  if (result.length > 0) {
    alert("các sản phẩm có trong danh mục là: ");
    result.forEach((product) => alert(product.name));
  } else {
    alert("không có sản phẩm trong danh mục này");
  }
}
