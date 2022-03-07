import Coupon from '../src/Coupon'
import Item from '../src/Item'
import Order from '../src/Order'
import OrderItem from '../src/OrderItem'

test ("Não Deve criar um pedido com CPF inválido",function () {
    expect(()=>new Order("111.111.111-11")).toThrow(new Error("Invalid CPF"))
})

test (" Deve criar um pedido",function () {
    const order = new Order("734.625.920-33")

    expect(order).toBeDefined();
})

test("Deve criar um pedido com 3 itens", function () {
    const order = new Order("847.903.332-05");
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3);
    const total = order.getTotal();
    expect(total).toBe(6090);
});

test("Deve criar um pedido com 3 itens com cupom de desconto", function () {
    const order = new Order("847.903.332-05");
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3);
    order.addCoupon(new Coupon("VALE20", 20));
    const total = order.getTotal();
    expect(total).toBe(4872);
});

test("Deve criar um pedido com 3 itens com cupom de desconto expirado", function () {
    const order = new Order("847.903.332-05");
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3);
    order.addCoupon(new Coupon("VALE20", 20,new Date("2021-03-01")));
    const total = order.getTotal();
    expect(total).toBe(6090);
});