export interface Product {
  id: number
  name: string
  description: string
  price: number
  available: boolean
}

export interface ProductsResponse {
  products: Product[]
}

export const PRODUCTS: Product[] = [
	{id: 1, name: 'Tirante de pino 2"x4"', description: 'Pino seco, largo 3.05 m.', price: 2800, available: true},
	{id: 2, name: 'Tabla de pino cepillada 1"x6"', description: 'Cepillada, lista para usar.', price: 2200, available: true},
	{id: 3, name: 'Machimbre de pino 1/2"', description: 'Para cielorrasos y revestimientos.', price: 9500, available: true},
	{id: 4, name: 'Placa MDF 18 mm', description: 'Placa cruda de 1.83 x 2.60 m.', price: 38000, available: true},
	// El unico sin stock: sirve para ver que la pantalla contempla ese caso.
	{id: 5, name: 'Fenólico 18 mm', description: 'Placa fenólica para obra.', price: 52000, available: false},
	{id: 6, name: 'Cola vinílica 1 kg', description: 'Adhesivo de secado rápido.', price: 6500, available: true}
];

// El retardo no es decorativo: sin el, los datos llegan en el mismo tick y el esqueleto de
// carga no se ve nunca. Con la API real la espera existe de verdad.
const RETARDO_SIMULADO = 600;

export function getProducts():Promise<ProductsResponse>{
	return new Promise(resolver =>{
		// Resuelve con los datos recien despues del retardo.
		window.setTimeout(() => resolver({products: PRODUCTS}), RETARDO_SIMULADO);
	});
}