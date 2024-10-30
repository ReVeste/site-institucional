import React from "react";
import "./TermosDeServico.css";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import logo from '../../assets/logo.png'; // Certifique-se de que o caminho está correto

const TermosDeServico = () => {
  const navigate = useNavigate(); // Chama o useNavigate para obter a função de navegação

  return (
    <div className="termos-container">
      <header className="cabecalho">
        <h1>Termos de serviço</h1>
      </header>

      <main className="conteudo-termos">
        <section>
          <h2>Serviço ReVeste</h2>
          <p>Bem-vindo aos Termos de Serviço oferecidos pela ReVeste.</p>
          <p>
            Por favor, leia atentamente esses termos antes de utilizar nossos serviços. Ao acessar ou utilizar os serviços fornecidos por nós, você concorda em cumprir e estar vinculado a estes termos. Se você não concordar com algum desses termos, não poderá acessar ou utilizar nossos serviços.
          </p>
        </section>

        <section>
          <h3>1. Descrição dos Serviços</h3>
          <p>
            A ReVeste oferece soluções para a criação de e-commerces individualizados voltados para brechós. Nossos serviços incluem o desenvolvimento, personalização, configuração e suporte contínuo das lojas virtuais, ajustados conforme as necessidades específicas de cada cliente.
          </p>
        </section>

        <section>
          <h3>2. Responsabilidades do Cliente</h3>
          <p>Ao utilizar nossos serviços, o cliente concorda em:</p>
          <ul>
            <li>a) Fornecer informações precisas e atualizadas, como nome, e-mail, telefone, nome da empresa e CNPJ, ao preencher o formulário de solicitação;</li>
            <li>b) Garantir a segurança e integridade das informações e conteúdos inseridos em seu e-commerce;</li>
            <li>c) Notificar a ReVeste imediatamente sobre qualquer problema técnico, falha ou necessidade de suporte relacionada à sua loja virtual.</li>
          </ul>
        </section>

        <section>
          <h3>3. Propriedade Intelectual</h3>
          <p>
            Todos os direitos de propriedade intelectual relacionados aos nossos produtos e serviços, incluindo software, design e conteúdo das lojas virtuais, permanecem exclusivamente com a ReVeste.
          </p>
        </section>

        <section>
          <h3>4. Pagamento e Faturamento</h3>
          <p>
            Os detalhes relativos a pagamento e faturamento serão acordados entre as partes e especificados em contrato. Quaisquer inadimplências podem resultar na suspensão dos serviços até que os pagamentos pendentes sejam regularizados.
          </p>
        </section>

        <section>
          <h3>5. Cancelamento de Serviços</h3>
          <p>
            O cliente pode cancelar os serviços a qualquer momento, mediante notificação por escrito à ReVeste. Quaisquer pagamentos adiantados ou taxas não reembolsáveis serão tratados de acordo com os termos previamente acordados.
          </p>
        </section>

        <section>
          <h3>6. Limitação de Responsabilidade</h3>
          <p>
            A ReVeste não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais decorrentes da incapacidade de usar nossos serviços, incluindo, mas não se limitando a, perda de lucros, perda de dados ou interrupção de negócios.
          </p>
        </section>

        <section>
          <h3>7. Disposições Gerais</h3>
          <p>
            Estes termos constituem o acordo completo entre o cliente e a ReVeste em relação aos serviços de criação de e-commerces e substituem todos os acordos anteriores ou contemporâneos.
          </p>
          <p>
            Se qualquer disposição destes termos for considerada inválida ou inexequível por um tribunal de jurisdição competente, tal disposição será substituída por uma disposição válida e exequível que mais se aproxime da intenção original das partes, e os demais termos permanecerão em pleno vigor e efeito.
          </p>
        </section>

        <section>
          <h3>8. Jurisdição e Lei Aplicável</h3>
          <p>
            Estes termos serão regidos e interpretados de acordo com as leis do Brasil, e quaisquer litígios decorrentes ou relacionados a estes termos serão submetidos à jurisdição exclusiva dos tribunais do Brasil.
          </p>
          <p>
            Ao utilizar nossos serviços, você reconhece que leu, compreendeu e concordou com estes Termos de Serviço. Se você tiver alguma dúvida sobre estes termos, entre em contato conosco antes de utilizar nossos serviços.
          </p>
        </section>

        <footer>
          <p>Data de Efeito: 11/09/2024.</p>
        </footer>
        </main>
    </div>
  );
};

export default TermosDeServico;