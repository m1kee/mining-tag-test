import { IIndicator } from "./indicator";

export interface IGetAllResponse {
    version: string,
    autor: string, 
    fecha: Date,
    uf: IIndicator,
    ivp: IIndicator,
    dolar: IIndicator,
    dolar_intercambio: IIndicator,
    euro: IIndicator,
    ipc: IIndicator,
    utm: IIndicator,
    imacec: IIndicator,
    tpm: IIndicator,
    libra_cobre: IIndicator,
    tasa_desempleo: IIndicator,
    bitcoin: IIndicator
};