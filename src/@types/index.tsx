export interface ContactFormObject {
  nombre: string;
  poblacion: string;
  email: string;
  telefono: string;
  tipo_establecimiento: InstitutionType;
  periodicidad: Periodicity;
  tipo_ropa: ClothType;
  cantidad: Quantity;
  comentario: string;
}

export enum InstitutionType {
  Hotel = "Hotel",
  Apartamento_Turistico = "Apartamento turístico",
  Restaurante = "Restaurante",
  Residencia = "Residencia",
  Centro_Deportivo = "Centro deportivo",
  Otro = "Otro",
}

export enum Periodicity {
  Daily = "Diario",
  Once_Week = "Una vez por semana",
  Twice_Week = "Dos veces por semana",
  Trice_Week = "Tres veces por semana",
  Other = "Otro",
}

export enum ClothType {
  Sabanas_Toallas = "Sabanas y toallas",
  Manteleria = "Mantelería",
  Uniformes = "Uniformes",
  Otros = "Otros",
}

export enum Quantity {
  Ten_to_TwentyFive = "de 10 a 25kg",
  TwentyFive_to_Fifty = "de 25 a 50kg",
  Fifty_to_Hundred = "de 50 a 100kg",
  More_than_Hundred = "más de 100kg",
}
export interface MailObject {
  from: MailUser;
  to: MailUser;
  subject: string;
  textPart: string;
  htmlPart?: string;
  customId: string;
}

export interface MailUser {
  email: string;
  name: string;
}
