export interface IIndicator {
    codigo: string,
    nombre: string,
    unidad_medida: string,
    fecha: Date,
    valor?: number,
    serie?: IDateValue[]
};

export interface IDateValue {
    fecha: Date,
    valor: number,
    variacion: number;
};
