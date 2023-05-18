export type Item = {
    id?: string;
    importe: number;
    descripcion: string;
    categoria: Categorias[];
};

export enum Categorias {
    Servicios,
    Impuestos, 
    Transporte,
    Educacion, 
    Alimentacion,
    Esparcimiento, 
    Ropa,
    Otros,
}