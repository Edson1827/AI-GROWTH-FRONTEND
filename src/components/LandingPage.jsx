import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Zap,
  Star,
  ArrowRight,
  Sun,
  Moon,
  BarChart3,
  Target,
  Rocket,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

const LandingPage = ({ onGetStarted }) => {
  const { theme, toggleTheme } = useTheme()
  const [selectedPlan, setSelectedPlan] = useState('aceleracao')
  const [openFaq, setOpenFaq] = useState(null)

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 297,
      description: 'Para PMEs que querem começar',
      cta: 'Garantir Resultados',
      popular: false,
      features: [
        'Dashboard completo',
        '5 campanhas ativas',
        'Automações básicas',
        'Relatórios semanais',
        'ROI médio: 280%',
        'Suporte por email'
      ]
    },
    {
      id: 'aceleracao',
      name: 'Aceleração',
      price: 597,
      description: 'Para PMEs que querem crescer',
      cta: 'Acelerar Crescimento',
      popular: true,
      features: [
        'Tudo do Starter +',
        '15 campanhas ativas',
        'Automações avançadas',
        'Relatórios diários',
        'ROI médio: 320%',
        'Suporte prioritário',
        'Análise competitiva'
      ]
    },
    {
      id: 'exponencial',
      name: 'Crescimento Exponencial',
      price: 1297,
      description: 'Para PMEs que querem escalar',
      cta: 'Escalar Negócio',
      popular: false,
      features: [
        'Tudo do Aceleração +',
        'Campanhas ilimitadas',
        'IA personalizada',
        'Relatórios em tempo real',
        'ROI médio: 350%',
        'Suporte dedicado',
        'Consultoria mensal',
        'White-label'
      ]
    }
  ]

  const faqData = [
    {
      question: "O que é ROI e como vocês garantem esses resultados?",
      answer: "ROI (Return on Investment) é o retorno sobre investimento. Nosso ROI médio de 280-350% significa que para cada R$ 1 investido, você recebe de R$ 2,80 a R$ 3,50 de volta. Conseguimos isso através de automações inteligentes, otimização contínua de campanhas e análise de dados em tempo real."
    },
    {
      question: "Qual a diferença entre os planos?",
      answer: "**Starter (R$ 297):** Ideal para começar, com 5 campanhas e automações básicas. **Aceleração (R$ 597):** Para crescimento, com 15 campanhas, automações avançadas e análise competitiva. **Exponencial (R$ 1.297):** Para escalar, com campanhas ilimitadas, IA personalizada e consultoria mensal."
    },
    {
      question: "O que são automações inteligentes?",
      answer: "São sistemas que otimizam suas campanhas automaticamente: ajustam orçamentos, pausam anúncios com baixo desempenho, criam audiências similares, enviam relatórios e fazem bid management. Tudo sem você precisar fazer nada manualmente."
    },
    {
      question: "Em quanto tempo vejo os primeiros resultados?",
      answer: "Os primeiros resultados aparecem em 7-14 dias, mas o ROI completo é atingido em 30 dias. Nosso setup é feito em 5 minutos e as campanhas começam a rodar no mesmo dia."
    },
    {
      question: "Vocês trabalham com quais plataformas?",
      answer: "Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, TikTok Ads e YouTube Ads. Nosso sistema integra todas as plataformas em um dashboard único para você acompanhar tudo em um só lugar."
    },
    {
      question: "Como funciona a garantia de 30 dias?",
      answer: "Se em 30 dias você não ver melhoria nos seus resultados de marketing, devolvemos 100% do valor pago. Sem perguntas, sem burocracia. Nossa confiança nos resultados é total."
    },
    {
      question: "Preciso ter conhecimento técnico?",
      answer: "Não! Nosso sistema é 100% automatizado. Você só precisa acompanhar os relatórios e resultados. Todo o trabalho técnico (configuração, otimização, análise) é feito pela nossa IA e equipe especializada."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim, pode cancelar a qualquer momento sem multa ou taxa. Acreditamos que você deve ficar porque está satisfeito com os resultados, não por estar preso em contrato."
    }
  ]

  const testimonials = [
    {
      name: 'Carlos Silva',
      company: 'TechStart',
      text: 'Em 3 meses aumentamos 400% nossa receita. O ROI foi impressionante!',
      rating: 5
    },
    {
      name: 'Ana Costa',
      company: 'ModaFlex',
      text: 'Finalmente um sistema que realmente funciona. Resultados desde o primeiro mês.',
      rating: 5
    },
    {
      name: 'Roberto Lima',
      company: 'ServiçosPro',
      text: 'Melhor investimento que fizemos. Dashboard incrível e suporte excepcional.',
      rating: 5
    }
  ]

  const stats = [
    { number: '500+', label: 'PMEs Crescendo' },
    { number: '320%', label: 'ROI Médio' },
    { number: '30 dias', label: 'Primeiros Resultados' },
    { number: '97%', label: 'Satisfação' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI.GROWTH
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="outline" onClick={() => onGetStarted('login')}>
              Entrar
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            🚀 Mais de 500 PMEs crescendo
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Transforme sua PME em
            <br />
            <span className="text-green-500">Potência Digital</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Dashboard completo + Automações inteligentes que geram resultados <strong>REAIS</strong> em 30 dias. 
            ROI médio de <strong className="text-green-500">320%</strong> comprovado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              onClick={() => onGetStarted('aceleracao')}
            >
              <Rocket className="mr-2 h-5 w-5" />
              COMEÇAR AGORA - R$ 597/mês
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg rounded-xl"
            >
              Ver Demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Setup automático em 5 minutos
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              30 dias ou seu dinheiro de volta
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Suporte especializado
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Escolha seu <span className="text-primary">Plano de Crescimento</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todos os planos incluem dashboard completo, automações e suporte. 
              Comece hoje e veja resultados em 30 dias.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-primary shadow-lg scale-105 bg-gradient-to-b from-background to-muted/20' 
                    : 'hover:scale-105'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    MAIS POPULAR
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">R$ {plan.price}</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full py-6 text-lg rounded-xl transition-all ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                    onClick={() => onGetStarted(plan.id)}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              🛡️ <strong>Garantia de 30 dias</strong> ou seu dinheiro de volta
            </p>
            <p className="text-sm text-muted-foreground">
              Todos os preços em reais (BRL). Cobrança mensal. Cancele quando quiser.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Por que <span className="text-primary">AI.GROWTH</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              A única plataforma que combina Growth Marketing + Tráfego Pago + IA
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Dashboard Inteligente</h3>
              <p className="text-muted-foreground">
                Veja todos os seus KPIs em tempo real. ROI, CAC, LTV e muito mais em um só lugar.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Automações Avançadas</h3>
              <p className="text-muted-foreground">
                IA que otimiza suas campanhas 24/7. Mais conversões, menor CAC, maior ROI.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Resultados Garantidos</h3>
              <p className="text-muted-foreground">
                ROI médio de 320% em 90 dias. Se não funcionar, devolvemos seu dinheiro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O que nossos <span className="text-primary">clientes dizem</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background border-2 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo que você precisa saber sobre o AI.GROWTH
            </p>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para <span className="text-yellow-300">Transformar</span> sua PME?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a mais de 500 PMEs que já estão crescendo com AI.GROWTH. 
            Resultados em 30 dias ou seu dinheiro de volta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              onClick={() => onGetStarted('aceleracao')}
            >
              <Rocket className="mr-2 h-5 w-5" />
              COMEÇAR AGORA - R$ 597/mês
            </Button>
          </div>
          
          <p className="text-sm mt-6 opacity-75">
            ⚡ Setup em 5 minutos • 🛡️ 30 dias de garantia • 💳 Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">AI.GROWTH</span>
          </div>
          
          <p className="text-muted-foreground mb-4">
            Transformando PMEs em Potências Digitais
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">Termos de Uso</a>
            <a href="#" className="hover:text-primary">Política de Privacidade</a>
            <a href="#" className="hover:text-primary">Contato</a>
            <a href="#" className="hover:text-primary">Suporte</a>
          </div>
          
          <p className="text-xs text-muted-foreground mt-6">
            © 2025 AI.GROWTH. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

