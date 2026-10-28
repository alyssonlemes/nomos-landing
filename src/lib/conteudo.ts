export const MODULOS = [
  {
    titulo: "Clientes",
    texto: "Pessoa física e jurídica no mesmo cadastro, com documento, contato e situação do relacionamento.",
  },
  {
    titulo: "Processos",
    texto: "Número, tipo, status e equipe responsável. Cada ação fica ligada ao cliente e ao escritório.",
  },
  {
    titulo: "Equipe",
    texto: "Convites com papel: administrador, membro, visualizador ou assistente. Cada um vê o que lhe cabe.",
  },
  {
    titulo: "Jurimetria",
    texto: "Estimativa de tempo de tramitação a partir do DataJud, com o tempo já decorrido e o que ainda falta.",
  },
] as const;

export const PASSOS = [
  {
    numero: "01",
    titulo: "Abra o escritório",
    texto: "A conta nasce no sistema. A organização isola clientes, processos e usuários dos demais escritórios.",
  },
  {
    numero: "02",
    titulo: "Monte a carteira",
    texto: "Cadastre clientes, registre os processos e convide quem vai acompanhar cada caso.",
  },
  {
    numero: "03",
    titulo: "Acompanhe a tramitação",
    texto: "O painel do escritório mostra a carteira. A jurimetria estima quanto tempo o processo ainda deve levar.",
  },
] as const;

export const PERGUNTAS = [
  {
    pergunta: "O que é o Nomos?",
    resposta:
      "É o sistema de gestão do escritório: clientes, processos, equipe e uma leitura de jurimetria sobre o tempo de tramitação.",
  },
  {
    pergunta: "Os dados de um escritório se misturam com os de outro?",
    resposta:
      "Não. Cada organização enxerga apenas os próprios clientes, processos, convites e usuários.",
  },
  {
    pergunta: "O que a jurimetria entrega?",
    resposta:
      "Uma estimativa de duração do processo, com o tempo já decorrido e o tempo restante, a partir dos dados do DataJud.",
  },
  {
    pergunta: "Quem pode convidar a equipe?",
    resposta:
      "Administradores e o proprietário do escritório. Membro, visualizador e assistente trabalham na carteira sem gerir convites.",
  },
] as const;
