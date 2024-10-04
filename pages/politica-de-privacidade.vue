<template>
  <!-- Política de Privacidade -->
  <section class="py-5 bg-dark d-flex my-5 text-light" id="topo">
    <div class="container d-flex justify-content-center align-items-center my-5 py-5">
      <div class="row">
        <div class="col text-center my-2">
          <div class="my-2">
            <NuxtLink to="/" class="text-light">Página inicial</NuxtLink> /
            <span>Política de Privacidade</span>
          </div>
          <h1 class="text-light">Política de Privacidade</h1>
        </div>
      </div>
    </div>
  </section>

  <section id="politica" class="my-3">
    <div class="container">
      <div class="row">
        <div class="col my-5 py-5">
          <h2>Introdução</h2>
          <p>
            Esta Política de Privacidade descreve como a GS Studio coleta, usa e protege as informações pessoais que você nos fornece ao visitar nosso site. Estamos comprometidos com a proteção de seus dados e respeitamos sua privacidade de acordo com as leis aplicáveis, como a Lei Geral de Proteção de Dados (LGPD) no Brasil, o Regulamento Geral de Proteção de Dados (GDPR) da União Europeia, e demais normas internacionais de proteção de dados.
          </p>

          <h2>Coleta e Uso de Dados</h2>
          <p>
            Nós coletamos seus dados para diferentes finalidades, tanto comerciais quanto não comerciais. Ao visitar nosso site, participar de campanhas de marketing, ou interagir com nossos serviços, você pode fornecer informações como nome, e-mail, endereço e outras informações pessoais. Também utilizamos códigos de mensuração de dados de redes sociais, Google Analytics e outros serviços para capturar dados comportamentais e demográficos com o objetivo de aprimorar nossas estratégias comerciais e de comunicação.
          </p>

          <h2>Finalidade do Tratamento de Dados</h2>
          <p>
            Os dados coletados serão utilizados para:
          </p>
          <ul>
            <li>Envio de e-mail marketing com conteúdo promocional e informativo.</li>
            <li>Personalização de campanhas publicitárias em plataformas como Google Ads, Facebook Ads e similares.</li>
            <li>Análise de desempenho de campanhas usando métricas e dados fornecidos por ferramentas de análise digital.</li>
            <li>Melhoria dos nossos serviços e comunicação com base no comportamento do usuário.</li>
            <li>Atendimento a demandas comerciais e não comerciais.</li>
          </ul>

          <h2>Compartilhamento de Dados</h2>
          <p>
            Podemos compartilhar seus dados com parceiros comerciais, provedores de serviços de marketing digital e análise de dados para alcançar os objetivos descritos acima. Garantimos que todos os parceiros envolvidos no tratamento de seus dados estejam em conformidade com a legislação aplicável, incluindo a LGPD e o GDPR, utilizando as melhores práticas de segurança da informação para evitar vazamento ou uso indevido de seus dados.
          </p>

          <h2>Direitos dos Titulares de Dados</h2>
          <p>
            De acordo com a LGPD, você possui os seguintes direitos sobre seus dados:
          </p>
          <ul>
            <li>Acesso aos seus dados armazenados por nós.</li>
            <li>Correção de dados incompletos, desatualizados ou incorretos.</li>
            <li>Solicitação de anonimização, bloqueio ou eliminação de dados desnecessários.</li>
            <li>Revogação de consentimento para tratamento de dados.</li>
          </ul>
          <p>
            Caso deseje exercer qualquer um desses direitos, entre em contato conosco pelo e-mail: <a href="mailto:hello@gsstudio.com.br">hello@gsstudio.com.br</a>.
          </p>

          <h2>Segurança dos Dados</h2>
          <p>
            Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou destruição. Nosso sistema de segurança segue os mais altos padrões de proteção de dados, garantindo a confidencialidade, integridade e disponibilidade das informações tratadas.
          </p>

          <h2>Alterações à Política de Privacidade</h2>
          <p>
            Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento. Quaisquer alterações serão publicadas nesta página e você será informado sobre qualquer mudança substancial que afete seus direitos ou a forma como utilizamos seus dados.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

useHead ({
      meta: [
        { name: 'robots', content: 'noindex,nofollow' },
        { name: 'canonical', content: 'https://www.gsstudio.com.br/politica-de-privacidade' },
      ],
    })
useSeoMeta({
      title: 'Política de Privacidade | GS STUDIO',
      description: 'Nos importamos com a integridade de cada usuário em nosso site.',
      ogTitle: 'Política de Privacidade | GS STUDIO',
      ogDescription: 'Nos importamos com a integridade de cada usuário em nosso site.',
      ogUrl: 'https://gsstudio.com.br/politica-de-privacidade',
      ogSiteName: 'GS STUDIO',
      ogLocale: 'pt_BR',
    });
</script>

<style scoped>
/* Estilo da página de Política de Privacidade */
#politica {
  color: #333;
  line-height: 1.6;
}

h2 {
  margin-top: 20px;
  color: #6C2BD9;
}

ul {
  padding-left: 20px;
}

ul li {
  margin-bottom: 10px;
}
</style>
