const order = {};

/* ORIGINAL
if (order && order.customer && order.customer.address && !order.customer.address.city) {
 console.log('City is required');
}
*/

if (order && order.customer && order.customer.address?.city) {
  console.log('City is required');
}
