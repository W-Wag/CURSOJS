const texto = `
João é um nome muito comum em Portugal. Existem muitas pessoas chamadas João por aqui. João é um nome bonito e significativo. joão gosta de praticar esportes e passar tempo com maria e os amigos. Se você está procurando por um João, com certeza encontrará muitos por aqui!
As vezes alguem chama Joooooooãoooooooo pelas ruas daqui.
`;

const arquivos = [
    "documento123.txt",
    "relatorio_final.docx",
    "imagem_fundo.jpg",
    "imagem_fundo2.JPG",
    "imagem_fundo.jpeg",
    "codigo_fonte.py",
    "planilha_vendas.xlsx",
];

const html = '<p> Ola mundo </p> <p> Ola again </p>';

const alfabeto = `AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz 0123456789 _-/';,.*@#$%^&+= atenção`;

const cpfs =`
  Os Cpfs são:
  111.111.111-11
  254.224.877-25
  215.978.456-12
  047.258.369-96
  963.987.321.00
`;

const ips = `
  Os IPs são:
  0.0.0.0

  192.168.0.25
  192.168.0.1
  10.10.5.12
  180.12.0.50

  255.255.255.255
`;

module.exports = {
    texto,
    arquivos,
    html,
    alfabeto,
    cpfs,
    ips
}
