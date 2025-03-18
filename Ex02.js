// Khởi tạo danh sách sách
let books = [
  {
    id: 1,
    name: "Lập trình JavaScript",
    price: 50000,
    quantity: 10,
    category: "Công nghệ",
  },
  {
    id: 2,
    name: "Học Python cơ bản",
    price: 60000,
    quantity: 7,
    category: "Công nghệ",
  },
  {
    id: 3,
    name: "Lịch sử Việt Nam",
    price: 45000,
    quantity: 15,
    category: "Lịch sử",
  },
  {
    id: 4,
    name: "Tâm lý học tội phạm",
    price: 80000,
    quantity: 5,
    category: "Tâm lý học",
  },
];

let cart = []; // Khởi tạo giỏ hàng

// 1. Hiển thị danh sách sách theo thể loại
function hienThiTheoTheLoai() {
  let theLoai = prompt("Nhập thể loại sách muốn hiển thị: ");
  let result = books.filter((book) => book.category === theLoai);
  if (result.length > 0) {
    let danhSach = result
      .map(
        (book) =>
          `Tên sách: ${book.name}, Giá: ${book.price}, Số lượng: ${book.quantity}`
      )
      .join("\n");
    alert("Danh sách sách trong thể loại:\n" + danhSach);
  } else {
    alert("Không có sách nào thuộc thể loại này!");
  }
}

// 2. Thêm sách mới vào kho
function themSach() {
  let id = +prompt("Nhập ID sách: ");
  let name = prompt("Nhập tên sách: ");
  let price = +prompt("Nhập giá sách: ");
  let quantity = +prompt("Nhập số lượng sách: ");
  let category = prompt("Nhập thể loại sách: ");
  books.push({ id, name, price, quantity, category });
  alert("Đã thêm sách vào kho!");
}

// 3. Tìm kiếm sách theo tên hoặc ID
function timKiemSach() {
  let timKiem = prompt("Nhập tên sách hoặc ID sách cần tìm: ");
  let result = books.filter(
    (book) => book.name.includes(timKiem) || book.id == timKiem
  );
  if (result.length > 0) {
    let danhSach = result
      .map(
        (book) =>
          `ID: ${book.id}, Tên: ${book.name}, Giá: ${book.price}, Số lượng: ${book.quantity}`
      )
      .join("\n");
    alert("Kết quả tìm kiếm:\n" + danhSach);
  } else {
    alert("Không tìm thấy sách!");
  }
}

// 4. Mua sách (cập nhật kho và giỏ hàng)
function muaSach() {
  let id = +prompt("Nhập ID sách muốn mua: ");
  let book = books.find((book) => book.id === id);
  if (!book) {
    alert("Không tìm thấy sách!");
    return;
  }
  let soLuong = +prompt("Nhập số lượng muốn mua: ");
  if (soLuong <= 0 || soLuong > book.quantity) {
    alert("Số lượng không hợp lệ hoặc vượt quá số lượng trong kho!");
    return;
  }
  book.quantity -= soLuong; // Cập nhật số lượng trong kho
  let cartItem = cart.find((item) => item.id === id);
  if (cartItem) {
    cartItem.quantity += soLuong; // Nếu sách đã trong giỏ, cập nhật số lượng
  } else {
    cart.push({ ...book, quantity: soLuong }); // Thêm sách vào giỏ
  }
  alert("Đã thêm sách vào giỏ hàng!");
}

// 5. Sắp xếp sách theo giá
function sapXepSach(tangDan = true) {
  books.sort((a, b) => (tangDan ? a.price - b.price : b.price - a.price));
  let danhSach = books
    .map((book) => `Tên sách: ${book.name}, Giá: ${book.price}`)
    .join("\n");
  alert(`Danh sách sách sau khi sắp xếp:\n${danhSach}`);
}

// 6. Tính tổng số lượng và tiền trong giỏ hàng
function tinhTongTien() {
  let tongTien = cart.reduce(
    (sum, book) => sum + book.price * book.quantity,
    0
  );
  let tongSoLuong = cart.reduce((sum, book) => sum + book.quantity, 0);
  alert(`Tổng số lượng sách đã mua: ${tongSoLuong}\nTổng tiền: ${tongTien}`);
}

// 7. Hiển thị tổng số lượng sách trong kho
function tongSoLuongKho() {
  let tongSoLuong = books.reduce((sum, book) => sum + book.quantity, 0);
  alert(`Tổng số lượng sách trong kho: ${tongSoLuong}`);
}

// hàm menu

function menu() {
  let chay = true;
  while (chay) {
    let luaChon = prompt(`
  ------ MENU ------
  1. Hiển thị danh sách sách theo thể loại
  2. Thêm sách mới vào kho
  3. Tìm kiếm sách theo tên hoặc ID
  4. Mua sách
  5. Sắp xếp sách theo giá
     a. Tăng dần
     b. Giảm dần
  6. Tính tổng số lượng và tiền trong giỏ hàng
  7. Hiển thị tổng số lượng sách trong kho
  8. Thoát
  Nhập lựa chọn của bạn: `);

    switch (luaChon) {
      case "1":
        hienThiTheoTheLoai();
        break;
      case "2":
        themSach();
        break;
      case "3":
        timKiemSach();
        break;
      case "4":
        muaSach();
        break;
      case "5":
        let sapXep = prompt(
          "Nhập a để sắp xếp tăng dần, b để sắp xếp giảm dần:"
        );
        if (sapXep === "a") {
          sapXepSach(true);
        } else if (sapXep === "b") {
          sapXepSach(false);
        } else {
          alert("Lựa chọn không hợp lệ!");
        }
        break;
      case "6":
        tinhTongTien();
        break;
      case "7":
        tongSoLuongKho();
        break;
      case "8":
        chay = false;
        alert("Chương trình đã thoát.");
        break;
      default:
        alert("Lựa chọn không hợp lệ!");
    }
  }
}

menu();
