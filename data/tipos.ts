import type { Loc } from "@/lib/locale-text";

export type Categoria =
  | "praias"
  | "cultura"
  | "natureza"
  | "gastronomia"
  | "passeios";

export type Cidade = "aracaju" | "sao-cristovao";

export interface LinhaOnibus {
  numero: string;
  nome: Loc | string;
  dica: Loc | string;
}

export interface Ponto {
  slug: string;
  cidade: Cidade;
  nome: Loc | string;
  categoria: Categoria;
  resumo: Loc | string;
  descricao: Loc | string;
  notaGoogle: number;
  avaliacoesGoogle: number;
  lat: number;
  lng: number;
  endereco: Loc | string;
  horario: Loc | string;
  preco: Loc | string;
  tempoVisita: Loc | string;
  fotos: string[];
  linhasOnibus: LinhaOnibus[];
  uberDaOrla: Loc | string;
  uberDoCentro: Loc | string;
  estacionamento: "facil" | "medio" | "dificil";
  estacionamentoDica: Loc | string;
  melhorTransporte: "a-pe" | "onibus" | "carro" | "uber" | "barco";
  melhorTransporteMotivo: Loc | string;
  dicas: (Loc | string)[];
}

export interface PontoResolvido {
  slug: string;
  cidade: Cidade;
  nome: string;
  categoria: Categoria;
  resumo: string;
  descricao: string;
  notaGoogle: number;
  avaliacoesGoogle: number;
  lat: number;
  lng: number;
  endereco: string;
  horario: string;
  preco: string;
  tempoVisita: string;
  fotos: string[];
  linhasOnibus: { numero: string; nome: string; dica: string }[];
  uberDaOrla: string;
  uberDoCentro: string;
  estacionamento: "facil" | "medio" | "dificil";
  estacionamentoDica: string;
  melhorTransporte: "a-pe" | "onibus" | "carro" | "uber" | "barco";
  melhorTransporteMotivo: string;
  dicas: string[];
}
