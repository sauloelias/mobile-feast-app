export interface Recipe {
  id: string;
  title: string;
  category: 'breakfast' | 'lunch' | 'snack' | 'dinner' | 'dessert';
  prepTime: string;
  servings: number;
  image: string;
  ingredients: string[];
  instructions: string[];
  tips: string[];
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  mealPrep: string[];
  variations: string[];
}

export const recipes: Recipe[] = [
  {
    id: 'tigela-frango-legumes-power',
    title: 'Tigela de Frango e Legumes Power Rápida',
    category: 'lunch',
    prepTime: '15 min',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '225g tiras de frango pré-cozidas (frango assado, tiras de frios ou aquecido)',
      '1 xícara mix de legumes congelados (cenoura, ervilha, milho, vagem)',
      '1 xícara arroz integral para micro-ondas, cozido',
      '1/2 xícara caldo de galinha com baixo teor de sódio',
      '1 colher de sopa azeite de oliva',
      '1/2 colher de chá alho em pó',
      '1/2 colher de chá páprica',
      '1/4 colher de chá sal',
      '1/4 colher de chá pimenta-do-reino',
      '2 colheres de sopa salsinha fresca, picada (opcional, para guarnecer)'
    ],
    instructions: [
      'Aqueça o arroz integral para micro-ondas conforme as instruções da embalagem (geralmente 90 segundos). Reserve.',
      'Em uma frigideira grande antiaderente, aqueça o azeite em fogo médio-alto. Adicione o mix de legumes congelados e cozinhe por 3-4 minutos, mexendo ocasionalmente, até aquecerem bem e começarem a amolecer.',
      'Adicione as tiras de frango pré-cozidas à frigideira com os legumes. Despeje o caldo de galinha e adicione o alho em pó, a páprica, o sal e a pimenta. Mexa delicadamente e cozinhe por 3-4 minutos até o frango aquecer completamente e o caldo reduzir ligeiramente.',
      'Divida o arroz quente entre duas tigelas. Cubra cada uma com a mistura de frango e legumes. Decore com salsinha fresca, se desejar, e sirva imediatamente.'
    ],
    tips: [
      'Use frango assado (rotisserie) pré-cozido quando disponível.',
      'Mantenha legumes congelados no freezer para refeições rápidas.',
      'O arroz pode ser preparado com antecedência e reaquecido.'
    ],
    nutrition: {
      calories: 280,
      protein: '26g',
      carbs: '28g',
      fat: '8g'
    },
    mealPrep: [
      'Cozinhe arroz em grandes quantidades e refrigere em porções.',
      'Divida os legumes congelados em recipientes para refeições.',
      'Desfie frango assado e congele em porções de 115g.',
      'Misture os temperos em um pequeno pote.',
      'Monte em recipientes próprios para micro-ondas com tampas herméticas.',
      'Permanece fresco por 3 dias na geladeira.',
      'Aqueça no micro-ondas por 2-3 minutos antes de comer, adicione o caldo para umidade.'
    ],
    variations: [
      'Peru: Use peito de peru defumado ou sobras de peru.',
      'Carne Bovina: Tiras de carne pré-cozidas ou sobras de assado.',
      'Vegetariano: Adicione 1/2 xícara de lentilhas ou grão de bico cozidos (+6g proteína, +8g fibra).',
      'Peixe: Use salmão ou atum pré-cozido (enlatado em água, escorrido).',
      'Primavera: Adicione ervilhas e cenouras congeladas.',
      'Verão: Use milho e vagem congelados.',
      'Outono: Inclua cubos de abóbora congelada.',
      'Inverno: Adicione brócolis e couve-flor congelados.'
    ]
  },
  {
    id: 'wrap-ovos-mexidos-vegetais',
    title: 'Wrap de Ovos Mexidos com Vegetais Frescos',
    category: 'lunch',
    prepTime: '15 min',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    ingredients: [
      '4 ovos grandes inteiros',
      '2 tortillas integrais grandes ou rap10 (20-25 cm)',
      '1 pimentão médio, picado em cubos (qualquer cor)',
      '1/2 cebola média, picada',
      '1 tomate médio fresco, picado em cubos',
      '2 xícaras espinafre fresco, picado grosseiramente',
      '1 colher de sopa azeite de oliva',
      '1/2 colher de chá sal',
      '1/4 colher de chá pimenta-do-reino',
      '1/4 colher de chá alho em pó (opcional)',
      '1/4 xícara queijo ralado (cheddar ou muçarela, opcional)'
    ],
    instructions: [
      'Aqueça o azeite de oliva em uma frigideira grande antiaderente em fogo médio. Adicione a cebola picada e o pimentão em cubos. Cozinhe por 3-4 minutos, mexendo ocasionalmente, até os vegetais começarem a amolecer.',
      'Adicione os tomates picados à frigideira e cozinhe por 2 minutos. Adicione o espinafre picado e cozinhe por 1-2 minutos até murchar. Empurre os vegetais para um lado da frigideira.',
      'Quebre os ovos em uma tigela, bata com sal, pimenta e alho em pó. Despeje os ovos no lado vazio da frigideira e mexa por 2-3 minutos até cozinharem, mas ainda estarem cremosos. Dobre gentilmente os vegetais nos ovos.',
      'Aqueça as tortillas no micro-ondas por 20 segundos. Divida a mistura de ovos entre as tortillas, adicione o queijo se for usar, dobre e sirva imediatamente.'
    ],
    tips: [
      'Pique os vegetais na noite anterior para economizar tempo.',
      'Use espinafre ensacado pré-lavado para maior conveniência.',
      'Aqueça as tortillas enquanto os ovos cozinham para economizar tempo.',
      'O alto teor de proteína e fibra ajuda a estabilizar os níveis de glicose.',
      'Excelente para o almoço, pois os ovos fornecem energia sustentada durante a tarde.'
    ],
    nutrition: {
      calories: 320,
      protein: '24g',
      carbs: '28g',
      fat: '12g'
    },
    mealPrep: [
      'Preparo de vegetais no domingo: Lave, pique e guarde todos os vegetais em recipientes separados.',
      'Preparo dos ovos: Quebre os ovos em um recipiente, bata com os temperos, e refrigere por até 2 dias.',
      'Mix de temperos: Combine sal, pimenta e alho em pó em um pequeno recipiente.',
      'Armazenamento de tortillas: Mantenha as tortillas em local de fácil acesso para pegar rapidamente.',
      'Para "pegar e levar": Cozinhe os ovos mexidos completamente, deixe esfriar antes de enrolar.',
      'Embrulhe bem em papel alumínio ou filme plástico.',
      'Permanecerá fresco refrigerado por 1 dia.',
      'Pode ser consumido frio ou aquecido no micro-ondas por 30-60 segundos.'
    ],
    variations: [
      'Mix de Primavera: Adicione aspargos frescos picados, ervilhas frescas, cebolinha e ervas frescas.',
      'Colheita de Verão: Inclua abobrinha, grãos de milho frescos, tomate cereja e manjericão.',
      'Conforto de Outono: Adicione cogumelos picados, pimentões coloridos e folhas verdes robustas.',
      'Aquecimento de Inverno: Use espinafre congelado, tomates enlatados e vegetais resistentes.',
      'Vegetariano: Mantenha a receita como está, rica em proteínas dos ovos.',
      'Sem Glúten: Use tortillas sem glúten ou folhas de alface como alternativa.',
      'Baixo Carboidrato: Substitua as tortillas por folhas de alface grandes.',
      'Extra Proteína: Adicione 1/4 xícara de queijo cottage ou ricota.'
    ]
  },
  {
    id: 'carne-bovina-vegetais-salteados',
    title: 'Carne Bovina e Vegetais Salteados Rápidos',
    category: 'lunch',
    prepTime: '16 min',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    ingredients: [
      '225g tiras de carne bovina pré-cortadas (para saltear, ou corte bifes finamente)',
      '2 xícaras vegetais congelados para saltear (normalmente brócolis, cenoura, ervilha torta, castanha-d\'água)',
      '1 xícara arroz integral cozido (sachês de micro-ondas funcionam bem)',
      '1 colher de sopa molho shoyu com baixo teor de sódio',
      '1 colher de sopa azeite de oliva',
      '1/2 colher de chá alho em pó',
      '1/4 colher de chá pimenta-do-reino',
      '1/4 colher de chá sal (ou a gosto)',
      'Uma pitada flocos de pimenta vermelha (opcional, para picância)',
      '2 colheres de sopa cebolinha verde picada (opcional, para guarnecer)'
    ],
    instructions: [
      'Aqueça o arroz integral conforme as instruções da embalagem (geralmente 90 segundos no micro-ondas). Reserve e mantenha aquecido.',
      'Aqueça o azeite de oliva em uma frigideira grande em fogo médio-alto. Adicione as tiras de carne bovina e salteie por 3-4 minutos até dourar e cozinhar. Transfira a carne para um prato.',
      'Adicione os vegetais congelados à mesma panela (não precisa lavar – use o sabor da carne). Salteie por 3-4 minutos até os vegetais estarem aquecidos e macios-crocantes.',
      'Retorne a carne à panela com os vegetais. Adicione o molho shoyu, o alho em pó, a pimenta-do-reino e o sal. Salteie por 1-2 minutos para combinar os sabores. Sirva sobre o arroz, guarneça com cebolinha verde se usar.'
    ],
    tips: [
      'Use tiras de carne pré-cortadas para economizar tempo.',
      'O mix de vegetais congelados elimina todo o tempo de picar.',
      'Tenha arroz para micro-ondas à mão para refeições rápidas.',
      'O alto teor de proteína ajuda a estabilizar os níveis de glicose.',
      'Perfeito para o almoço, pois a proteína da carne vermelha proporciona saciedade duradoura durante a tarde.'
    ],
    nutrition: {
      calories: 310,
      protein: '28g',
      carbs: '26g',
      fat: '8g'
    },
    mealPrep: [
      'Preparo da carne: Fatie a carne e marine por até 24 horas antes.',
      'Preparo de vegetais: Se usar frescos, corte os vegetais 1-2 dias antes.',
      'Cozinhe o arroz: Cozinhe arroz integral em grandes quantidades, refrigere em porções.',
      'Mistura do molho: Combine molho shoyu e temperos com antecedência.',
      'Dobre a receita: Faça extra para o almoço de amanhã.',
      'O salteado cozido dura 3-4 dias na geladeira.',
      'Reaquecimento: Micro-ondas por 2-3 minutos ou fogão por 5 minutos.'
    ],
    variations: [
      'Mix asiático: Brócolis, cenoura, ervilha torta, castanha-d\'água.',
      'Mix califórnia: Brócolis, couve-flor, cenoura.',
      'Mix oriental: Brócolis, cenoura, ervilha de cheiro, cogumelos.',
      'Salteado de pimentões: Vários pimentões coloridos e cebolas.',
      'Mix clássico: Flores de brócolis, cenouras fatiadas, ervilhas tortas.',
      'Mix colorido: Pimentões (várias cores), cebolas, abobrinha.',
      'Inspiração asiática: Bok choy, cogumelos, cenouras, broto de feijão.',
      'Mix de inverno: Repolho, cenouras, brócolis, couve-flor.',
      'Arroz de couve-flor: Opção de baixo carboidrato (reduz os carboidratos para 12g no total).',
      'Wraps de alface: Sirva a mistura em folhas de alface (baixo carboidrato).'
    ]
  },
  {
    id: 'sopa-fresca-vegetais-ervas',
    title: 'Sopa Fresca de Vegetais e Ervas',
    category: 'lunch',
    prepTime: '22 min',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    ingredients: [
      '4 xícaras caldo de vegetais com baixo teor de sódio',
      '3 talos de salsão (aipo) médios, picados (cerca de 1 xícara)',
      '2 cenouras médias, picadas (cerca de 1 xícara)',
      '1 cebola média, picada (cerca de 1 xícara)',
      '2 tomates frescos médios, picados (cerca de 1 xícara)',
      '1/2 xícara salsinha fresca, picada',
      '2 dentes alho, picados',
      '1 colher de sopa azeite de oliva',
      '1/2 colher de chá sal (ajuste a gosto)',
      '1/4 colher de chá pimenta-do-reino',
      '1 colher de sopa suco de limão fresco (opcional, para dar brilho)'
    ],
    instructions: [
      'Aqueça o azeite de oliva em uma panela grande para sopa em fogo médio. Adicione a cebola picada e cozinhe por 2-3 minutos até começar a amolecer.',
      'Adicione o alho picado e cozinhe por 30 segundos até ficar perfumado. Adicione os tomates picados e cozinhe por 4 minutos, mexendo ocasionalmente, até os tomates começarem a se desfazer e soltar seus sucos.',
      'Adicione o salsão e as cenouras picadas. Cozinhe por 2-3 minutos, mexendo para combinar com a mistura de tomate.',
      'Despeje o caldo de vegetais e leve para ferver em fogo alto (cerca de 2-3 minutos).',
      'Reduza o fogo para médio-baixo e cozinhe em fogo brando por 5-6 minutos até os vegetais ficarem macios, mas ainda com alguma textura.',
      'Retire do fogo. Adicione a salsinha fresca picada, sal, pimenta-do-reino e suco de limão, se estiver usando. Prove e ajuste o tempero conforme necessário.'
    ],
    tips: [
      'Pique todos os vegetais enquanto a panela aquece.',
      'Use uma tesoura de cozinha para picar rapidamente a salsinha diretamente na panela.',
      'O teor muito baixo de carboidratos com alto teor de fibra ajuda a manter a glicose estável.',
      'Perfeita como entrada antes de um prato principal rico em proteínas, ou como almoço leve com adição de proteína.'
    ],
    nutrition: {
      calories: 85,
      protein: '4g',
      carbs: '15g',
      fat: '4g'
    },
    mealPrep: [
      'A receita pode ser dobrada ou triplicada facilmente.',
      'Dura 4-5 dias na geladeira.',
      'Pode ser congelada por até 3 meses (adicione ervas frescas após reaquecer).',
      'Pré-pique os vegetais no domingo para a sopa da semana.',
      'Guarde os vegetais picados em recipientes herméticos.',
      'Mantenha caldo com baixo teor de sódio em estoque para sopas rápidas.',
      'As ervas frescas podem ser picadas e congeladas em formas de gelo com água.'
    ],
    variations: [
      'Versão Enriquecida: Adicione 1/2 xícara de feijão branco cozido por porção (+15g carboidratos, +8g proteína, +6g fibra).',
      'Com Frango: Sirva com 60g de peito de frango grelhado (+25g proteína, 0g carboidratos).',
      'Com Pão: Combine com 1 fatia de pão integral (+12g carboidratos, +3g fibra).',
      'Versão Robusta: Adicione 1/2 xícara de batata doce picada durante o cozimento.',
      'Versão Primavera: Substitua cenouras por aspargos, adicione ervilhas frescas, use cebolinha.',
      'Versão Verão: Adicione abobrinha, abóbora amarela, grãos de milho, finalize com manjericão.',
      'Versão Outono: Inclua abóbora moranga, adicione tomilho e sálvia, inclua pimentões.',
      'Versão Inverno: Adicione repolho e nabos, use ervas secas, adicione vinagre de maçã.'
    ]
  },
  {
    id: 'tigela-peixe-fresco-legumes',
    title: 'Tigela de Peixe Fresco e Legumes Assados',
    category: 'lunch',
    prepTime: '18 min',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
    ingredients: [
      '225g filés de peixe branco (tilápia, merluza, bacalhau ou similar), cortados em 2 porções',
      '1 abobrinha média, cortada em meias-luas',
      '1 pimentão médio, cortado em tiras (qualquer cor)',
      '1/2 cebola roxa média, fatiada',
      '1 xícara tomate cereja, cortado ao meio',
      '1 xícara arroz integral cozido (sachês de micro-ondas funcionam bem)',
      '2 colheres de sopa azeite de oliva',
      '1/2 colher de chá sal',
      '1/4 colher de chá pimenta-do-reino',
      '1/2 colher de chá alho em pó',
      '1/2 colher de chá páprica',
      '1 colher de sopa suco de limão (fresco ou engarrafado)'
    ],
    instructions: [
      'Pré-aqueça o forno a 220°C. Forre uma assadeira grande com papel manteiga.',
      'Corte os aspargos em pedaços de 5 cm, fatie a abobrinha em rodelas e a cebola em gomos.',
      'Em uma tigela grande, misture os vegetais com 2 colheres de sopa de azeite de oliva, metade do alho, orégano, manjericão, 1/2 colher de chá de sal e 1/4 colher de chá de pimenta-do-reino.',
      'Espalhe na assadeira em uma única camada.',
      'Seque o peixe com papel toalha.',
      'Esfregue com o restante de 1 colher de sopa de azeite de oliva, o alho restante, páprica, o sal e a pimenta restantes.',
      'Coloque o peixe na assadeira com os vegetais.',
      'Asse por 12-15 minutos até o peixe se desfazer facilmente com um garfo e os vegetais estarem macios com uma leve caramelização.',
      'Guarneça com salsinha fresca e sirva com gomos de limão.'
    ],
    tips: [
      'Compre vegetais pré-cortados, se disponíveis.',
      'Use papel manteiga para facilitar a limpeza.',
      'O peixe está pronto quando se desfaz facilmente.'
    ],
    nutrition: {
      calories: 250,
      protein: '32g',
      carbs: '16g',
      fat: '8g'
    },
    mealPrep: [
      'Porcione o peixe: Compre porções maiores, corte em tamanhos de porção, guarde por até 2 dias.',
      'Preparo de vegetais: Lave, corte e guarde os vegetais em recipientes (duram 4-5 dias).',
      'Misturas de temperos: Pré-misture ervas e especiarias secas em pequenos recipientes.',
      'Configuração do equipamento: Certifique-se de que as assadeiras estejam limpas e o papel manteiga disponível.'
    ],
    variations: [
      'Horta de Primavera: Substitua a abobrinha por vagem fresca. Adicione rabanetes cortados ao meio. Use manjericão fresco em vez de ervas secas.',
      'Abundância de Verão: Adicione abóbora amarela com a abobrinha. Inclua tomates cereja frescos e grãos de milho. Use manjericão e orégano frescos, se disponíveis.',
      'Colheita de Outono: Substitua os aspargos por couve de Bruxelas (cortadas ao meio). Adicione abóbora moranga picada. Tempere com tomilho e alecrim.'
    ]
  },
  {
    id: 'tigela-robusta-carne-ovos',
    title: 'Tigela Robusta de Carne Bovina e Ovos',
    category: 'lunch',
    prepTime: '16 min',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    ingredients: [
      '170g carne moída (magra, 90/10)',
      '4 ovos grandes inteiros',
      '1 xícara cogumelos Paris, fatiados',
      '2 xícaras espinafre fresco, picado grosseiramente',
      '1/2 cebola média, picada (cerca de 1/2 xícara)',
      '1 colher de sopa azeite de oliva',
      '2 dentes alho, picados (ou 1/2 colher de chá de alho em pó)',
      '1/2 colher de chá sal',
      '1/4 colher de chá pimenta-do-reino',
      '1/4 colher de chá páprica (opcional, para sabor)'
    ],
    instructions: [
      'Aqueça 1/2 colher de sopa de azeite de oliva em uma frigideira antiaderente grande em fogo médio-alto. Adicione a carne moída, desfazendo-a com uma espátula. Cozinhe até dourar e estar totalmente cozida, cerca de 5-6 minutos. Retire a carne para um prato e reserve.',
      'Na mesma frigideira (não limpe), adicione o azeite restante. Adicione a cebola picada e os cogumelos fatiados. Refogue por 3-4 minutos até as cebolas ficarem translúcidas e os cogumelos liberarem sua umidade.',
      'Adicione o alho e cozinhe por 30 segundos até ficar perfumado. Adicione o espinafre e cozinhe por 1-2 minutos até murchar. Tempere com sal, pimenta-do-reino e páprica.',
      'Retorne a carne cozida à frigideira e misture com os vegetais. Faça 4 pequenas "covas" na mistura e quebre um ovo em cada uma. Cubra a frigideira e cozinhe por 2-3 minutos até as claras dos ovos estarem firmes, mas as gemas ainda ligeiramente moles (ou cozinhe por mais tempo se preferir mais firme).',
      'Retire do fogo. Divida em 2 tigelas de servir, garantindo que cada uma receba 2 ovos e metade da mistura de carne e vegetais.'
    ],
    tips: [
      'Pique os vegetais na noite anterior.',
      'Use cogumelos pré-fatiados, se disponíveis.',
      'A carne moída cozinha muito mais rápido do que pedaços inteiros.',
      'Alto teor de proteína (32g) ajuda a estabilizar os níveis de glicose.',
      'Baixo teor de carboidratos (12g) ideal para controle rigoroso de carboidratos.'
    ],
    nutrition: {
      calories: 280,
      protein: '32g',
      carbs: '12g',
      fat: '18g'
    },
    mealPrep: [
      'Doure a carne moída em grande quantidade, porcione e refrigere.',
      'Pré-pique todos os vegetais, guarde em recipientes herméticos.',
      'Pré-misture a mistura de temperos em um pequeno pote.',
      'A montagem leva apenas 8 minutos durante a semana.',
      'A mistura de carne cozida dura 3-4 dias refrigerada.',
      'É melhor cozinhar os ovos frescos para obter a melhor textura.',
      'Reaqueça a mistura de carne e vegetais, adicione os ovos frescos para uma montagem rápida.'
    ],
    variations: [
      'Versão Mais Robusta: Adicione 1/4 xícara de arroz integral cozido a cada tigela (+11g carboidratos, +2g fibra).',
      'Reforço de Vegetais: Adicione 1/2 xícara de pimentões picados e tomates durante o cozimento (+4g carboidratos, +2g fibra).',
      'Estilo Mexicano: Adicione tomates picados, cominho, pimenta em pó, salsa e coentro fresco (+2g carboidratos, +1g fibra).',
      'Carne de Peru: Substitua por carne moída de peru (mesmo tempo, opção mais magra).',
      'Cogumelos Variados: Use qualquer cogumelo em promoção (Portobello, cremini ou brancos).',
      'Espinafre Congelado: Use 1 xícara de congelado (descongelado e escorrido).',
      'Claras de Ovo: Use claras + 1 ovo inteiro (reduz calorias e colesterol).',
      'Com Arroz: Sirva com 1/4 xícara de arroz integral se precisar de mais carboidratos.',
      'Com Molho: Adicione molho picante ou salsa para sabor sem carboidratos.',
      'Com Bebida: Combine com água com gás e limão para hidratação.'
    ]
  },
  {
    id: 'sopa-frango-vegetais-frescos',
    title: 'Sopa de Frango e Vegetais Frescos',
    category: 'lunch',
    prepTime: '20 min',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    ingredients: [
      '450g peito de frango, cortado em cubos pequenos de 1,5 cm',
      '4 xícaras caldo de galinha com baixo teor de sódio',
      '2 talos salsão (aipo), picados (cerca de 1/2 xícara)',
      '2 cenouras médias, picadas (cerca de 1/2 xícara)',
      '1 cebola média, picada (cerca de 1/2 xícara)',
      '2 tomates frescos médios, picados em cubos (cerca de 1 xícara)',
      '1 colher de sopa azeite de oliva',
      '1 colher de chá alho em pó (ou 2 dentes frescos, picados)',
      '1/2 colher de chá orégano seco',
      '1/2 colher de chá sal (ou a gosto)',
      '1/4 colher de chá pimenta-do-reino',
      '2 colheres de sopa salsinha fresca, picada (para guarnecer)'
    ],
    instructions: [
      'Aqueça o azeite de oliva em uma panela grande em fogo médio-alto. Adicione a cebola picada e cozinhe por 2-3 minutos até começar a amolecer. Enquanto a cebola cozinha, corte o frango em cubos pequenos.',
      'Adicione os cubos de frango à panela e cozinhe por 3-4 minutos, mexendo frequentemente, até o frango dourar levemente por todos os lados. Adicione o alho em pó e o orégano, cozinhe por 30 segundos até ficarem perfumados.',
      'Adicione o salsão e as cenouras picadas, cozinhe por 2 minutos. Despeje o caldo de galinha e leve para ferver em fogo alto.',
      'Adicione os tomates picados, reduza o fogo para médio e cozinhe em fogo brando por 3-4 minutos até os vegetais ficarem macios e o frango completamente cozido. Tempere com sal e pimenta-do-reino. Guarneça com salsinha fresca e sirva quente.'
    ],
    tips: [
      'Pique os vegetais na noite anterior.',
      'Use filés de frango pré-cortados (apenas corte-os menores).',
      'Tenha caldo de baixo teor de sódio à mão para sopas rápidas.',
      'Alto teor de proteína e fibra moderada ajudam a manter os níveis de glicose estáveis.',
      'Perfeita para o almoço, especialmente quando combinada com a medicação para diabetes.'
    ],
    nutrition: {
      calories: 205,
      protein: '26g',
      carbs: '16g',
      fat: '5g'
    },
    mealPrep: [
      'Preparo no domingo: Pique todos os vegetais, guarde em recipientes separados.',
      'Preparo da proteína: Corte o frango em cubos, guarde refrigerado por até 2 dias.',
      'Cozinhe em grande quantidade: Dobre a receita, porcione em recipientes.',
      'Reaquecimento: Micro-ondas por 2-3 minutos ou fogão por 5 minutos, adicione água se necessário.',
      'A base da sopa congela bem por até 3 meses.',
      'Adicione ervas frescas após o reaquecimento para melhor sabor.',
      'Pode ser necessário adicionar mais caldo após descongelar, pois os vegetais absorvem líquido.',
      'Rotule os recipientes com a data e as instruções de reaquecimento.'
    ],
    variations: [
      'Versão Primavera: Adicione ervilhas frescas, ervas frescas picadas, use cebolinha, adicione aspargos picados.',
      'Versão Outono/Inverno: Adicione pimentões picados, nabos ou rabanetes, use coxas de frango, adicione tomilho ou alecrim.',
      'Versão Econômica: Use coxas de frango, compre vegetais em promoção, use caldo comum, pule a salsinha fresca.',
      'Com Pão: Sirva com 1 fatia de pão integral (+12g carboidratos) se desejar uma refeição mais substancial.',
      'Com Salada: Combine com uma pequena salada lateral para fibras extras sem aumento significativo de carboidratos.',
      'Ervilhas Frescas: Adicione nos últimos 2 minutos de cozimento.',
      'Ervas Frescas: Inclua dill, tomilho se disponíveis.',
      'Cebolinha: Use em vez de cebola comum para um sabor mais suave.',
      'Aspargos: Adicione picados com os outros vegetais.',
      'Pimentões: Adicione picados com os outros vegetais.',
      'Nabos/Rabanetes: Inclua 1/2 xícara picados para um sabor terroso.',
      'Coxas de Frango: Use em vez de peito para um sabor mais rico.',
      'Tomilho/Alecrim: Adicione uma pitada seco.'
    ]
  },
  {
    id: 'wrap-fresco-abacate-vegetais',
    title: 'Wrap Fresco de Abacate e Vegetais',
    category: 'lunch',
    prepTime: '10 minutos',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '1 abacate maduro grande, amassado',
      '2 tortillas integrais grandes (20-25 cm de diâmetro)',
      '4 folhas de alface (romana, manteiga ou mix de folhas verdes)',
      '1 tomate médio, fatiado',
      '1/2 pepino médio, fatiado',
      '1 cenoura média, ralada ou cortada em juliana',
      '2 fatias finas de cebola roxa (opcional)',
      '1 colher de chá de suco de limão (fresco ou engarrafado)',
      '1/4 colher de chá de sal',
      '1/8 colher de chá de pimenta-do-reino',
      '1 colher de chá de azeite de oliva (opcional, para sabor extra)'
    ],
    instructions: [
      'Corte o abacate ao meio, remova o caroço e retire a polpa para uma tigela média. Amasse com um garfo até ficar liso, mas ainda com alguns pedaços. Adicione o suco de limão, sal e pimenta-do-reino; misture bem.',
      'Lave e prepare os vegetais: rasgue a alface em pedaços do tamanho de uma mordida, fatie o tomate e o pepino, rale a cenoura (ou use pré-ralada), fatie finamente a cebola roxa se for usar.',
      'Aqueça as tortillas no micro-ondas por 15 segundos, se desejar (opcional). Espalhe metade da mistura de abacate em cada tortilla. Camada com alface, tomate, pepino, cenoura e cebola. Enrole firmemente, corte ao meio na diagonal e sirva imediatamente.'
    ],
    tips: [
      'Use alface pré-lavada, cenouras pré-raladas da seção de hortifrúti, prepare a mistura de abacate até 2 horas antes (cubra bem para evitar que escureça).'
    ],
    nutrition: {
      calories: 245,
      protein: '8g',
      carbs: '26g',
      fat: '15g'
    },
    mealPrep: [
      'Mistura de abacate: Prepare até 2 horas antes, cubra bem.',
      'Preparo de vegetais: Lave, pique e guarde os vegetais por até 2 dias.',
      'Wraps montados: Monte na manhã do consumo, embrulhe firmemente.',
      'Ingredientes secos: Pré-misture sal, pimenta e temperos.'
    ],
    variations: [
      'Primavera: Adicione brotos de ervilha frescos, fatias de rabanete ou espinafre baby.',
      'Verão: Inclua tiras de pimentão, grãos de milho frescos ou fitas de abobrinha.',
      'Outono: Adicione maçã fatiada finamente, repolho ralado ou pimentão vermelho assado (de pote).',
      'Inverno: Use vegetais armazenados como cenoura, repolho ou brotos germinados.'
    ]
  },
  {
    id: 'salada-fresca-atum-legumes',
    title: 'Salada Fresca de Atum e Legumes da Horta',
    category: 'lunch',
    prepTime: '12 minutos',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=400&h=300&fit=crop',
    ingredients: [
      '225g de atum fresco em posta (ou 2 latas [140g cada] de atum em água, escorrido)',
      '2 ovos cozidos grandes, descascados e picados',
      '4 xícaras de mix de folhas verdes (mix de primavera, espinafre baby ou mix de alface)',
      '1 xícara de tomate cereja, cortado ao meio',
      '1 pepino médio, picado em cubos (cerca de 1 xícara)',
      '1 cenoura média, ralada ou cortada em juliana',
      '2 colheres de sopa de cebola roxa, fatiada finamente (opcional)',
      '2 colheres de sopa de azeite de oliva extra virgem',
      '1 colher de sopa de suco de limão fresco',
      '1/4 colher de chá de sal',
      '1/4 colher de chá de pimenta-do-reino',
      '1/4 colher de chá de orégano seco (opcional)'
    ],
    instructions: [
      'Se for usar atum fresco, aqueça uma frigideira antiaderente em fogo médio-alto. Tempere as postas de atum com sal e pimenta, sele por 2-3 minutos de cada lado para malpassado (ou cozinhe por mais tempo, se preferir). Deixe descansar e fatie. Se for usar atum em lata, apenas escorra e desfie em pedaços.',
      'Enquanto o atum descansa (ou imediatamente se estiver usando enlatado), lave e corte os tomates cereja ao meio, pique o pepino e fatie a cebola roxa, se for usar. Rale a cenoura ou use cenoura pré-ralada.',
      'Em uma tigela grande de salada, bata o azeite, o suco de limão, o sal, a pimenta e o orégano. Adicione as folhas verdes e misture para cobrir. Cubra com os legumes, o atum fatiado e os ovos cozidos picados. Sirva imediatamente.'
    ],
    tips: [
      'Use mix de salada pré-lavado, cenouras pré-raladas e prepare ovos cozidos com antecedência. O atum enlatado elimina completamente a etapa de cozimento.'
    ],
    nutrition: {
      calories: 290,
      protein: '32g',
      carbs: '18g',
      fat: '12g'
    },
    mealPrep: [
      'Preparo no domingo: Cozinhe 6 ovos para a semana.',
      'Preparo de vegetais: Lave e pique os vegetais, guarde separadamente.',
      'Molho: Misture azeite, suco de limão e temperos em um pequeno pote.',
      'Armazenamento: Mantenha os vegetais em recipientes herméticos por até 4 dias.'
    ],
    variations: [
      'Versão Econômica: Use 2 latas (140g cada) de atum sólido em água. Adicione vegetais extras para aumentar o volume. Inclua 1 colher de sopa de alcaparras para um sabor mediterrâneo (se disponível). Pode fazer uma porção maior para preparo de refeições.',
      'Alternativas de Proteína: Salmão enlatado, frango cozido (use frango assado quando em promoção), fatias de peito de peru ou sobras de peru assado.',
      'Vegetariano: Adicione 1/2 xícara de grão de bico (aumenta carboidratos para 28g no total).',
      'Versão para Marmita: Embale os componentes da salada separadamente para evitar que murchem. Mantenha o molho em um recipiente pequeno, adicione pouco antes de comer. Se usar atum fresco, cozinhe e resfrie completamente antes de embalar. Permanecerá fresco na geladeira por 2 dias montado.'
    ]
  },
  {
    id: 'ensopado-rapido-lentilha-vegetais',
    title: 'Ensopado Rápido de Lentilha e Vegetais',
    category: 'lunch',
    prepTime: '25 minutos',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '1 xícara de lentilha vermelha, lavada e separada',
      '3 xícaras de caldo de vegetais com baixo teor de sódio',
      '2 cenouras médias, picadas (cerca de 1 xícara)',
      '1 cebola média, picada (cerca de 1/2 xícara)',
      '2 talos de salsão (aipo), picados (cerca de 1/2 xícara)',
      '1 lata (410g) de tomates em cubos, escorrida',
      '1 colher de sopa de azeite de oliva',
      '1 colher de chá de alho em pó',
      '1/2 colher de chá de cominho moído',
      '1/2 colher de chá de sal (ou a gosto)',
      '1/4 colher de chá de pimenta-do-reino',
      '1/2 colher de chá de orégano seco (opcional)',
      '2 colheres de sopa de salsinha fresca, picada (para guarnecer)'
    ],
    instructions: [
      'Lave a lentilha vermelha em uma peneira fina até a água sair limpa. Reserve. Aqueça o azeite de oliva em uma panela grande em fogo médio. Adicione a cebola picada e cozinhe por 3-4 minutos até começar a amolecer.',
      'Adicione as cenouras e o salsão picados à panela. Cozinhe por 3-4 minutos, mexendo ocasionalmente, até os vegetais começarem a amolecer. Adicione o alho em pó, o cominho e o orégano; cozinhe por 30 segundos até ficarem perfumados.',
      'Adicione a lentilha lavada, o caldo de vegetais e os tomates em cubos escorridos. Leve para ferver em fogo alto, depois reduza o fogo para médio-baixo e cozinhe em fogo brando por 12-15 minutos até a lentilha ficar macia e o ensopado engrossar.',
      'Tempere com sal e pimenta-do-reino a gosto. Retire do fogo, deixe descansar por 2-3 minutos para engrossar ainda mais. Guarneça com salsinha fresca e sirva quente.'
    ],
    tips: [
      'Pique os vegetais na noite anterior, lave as lentilhas com antecedência, use alho picado pronto (de pote) se picar alho fresco for demorado.'
    ],
    nutrition: {
      calories: 210,
      protein: '18g',
      carbs: '28g',
      fat: '4g'
    },
    mealPrep: [
      'Preparo no domingo: Pique todos os vegetais, guarde em recipientes separados por até 5 dias.',
      'Preparo de lentilhas: Lave e separe as lentilhas, guarde em um recipiente seco.',
      'Mistura de temperos: Combine todas as especiarias secas em um pequeno recipiente para facilitar a medição.',
      'Cozinhe em lote: Dobre ou triplique a receita, porcione em recipientes.'
    ],
    variations: [
      'Primavera: Adicione ervilhas frescas ou aspargos nos últimos 5 minutos. Inclua ervas frescas como dill ou tomilho, se disponíveis. Use restos de vegetais (cascas de cebola, topos de cenoura) para fazer caldo caseiro. Adicione folhas verdes de primavera, como espinafre, nos últimos 2 minutos.',
      'Outono: Adicione batata doce picada com as cenouras (observe a contagem de carboidratos). Inclua pimentões picados para cor e nutrição extras. Use ervas frescas como sálvia ou alecrim, se disponíveis. Adicione couve picada ou folhas verdes robustas nos últimos 5 minutos.',
      'Inverno: Adicione nabos ou cherovias picados para um sabor terroso. Inclua vegetais mistos congelados se os frescos não estiverem disponíveis. Use tomates enlatados exclusivamente para um sabor consistente. Dobre a quantidade de especiarias para um efeito aquecedor.',
      'Armazenamento: Geladeira: Dura 4-5 dias, os sabores melhoram de um dia para o outro. Congelador: Dura 3 meses, pode ser necessário adicionar líquido extra ao reaquecer. Reaquecimento: Adicione 2-4 colheres de sopa de caldo ou água, cozinhe em fogo brando por 5 minutos. Tamanho da porção: A receita rende 4 porções generosas para o almoço.'
    ]
  },
  {
    id: 'smoothie-banana-amendoim',
    title: 'Smoothie de Banana com Amendoim',
    category: 'breakfast',
    prepTime: '5 minutos',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '1 banana pequena, congelada (descascada e fatiada antes de congelar)',
      '1 colher de sopa de pasta de amendoim natural (sem açúcar adicionado)',
      '3/4 xícara de leite desnatado (2% gordura ou desnatado)',
      '1/4 xícara de iogurte grego natural (2% gordura)',
      '1/4 colher de chá de canela em pó',
      '1/4 colher de chá de extrato de baunilha (opcional)',
      '3-4 cubos de gelo (se a banana não estiver congelada)',
      'Pitada de sal'
    ],
    instructions: [
      'Adicione os pedaços de banana congelada, pasta de amendoim, leite e iogurte grego no liquidificador.',
      'Adicione canela, baunilha e sal. Bata em velocidade alta por 60-90 segundos até ficar completamente liso e cremoso.',
      'Despeje em dois copos. Se estiver muito grosso, adicione 1-2 colheres de sopa de leite e bata rapidamente. Sirva imediatamente.'
    ],
    tips: [
      'Fatie e congele bananas em porções individuais.',
      'Mantenha bananas congeladas em sacos no freezer com datas.',
      'Limpe o liquidificador imediatamente após o uso para evitar grudação.'
    ],
    nutrition: {
      calories: 180,
      protein: '12g',
      carbs: '24g',
      fat: '5g'
    },
    mealPrep: [
      'Como congelar bananas: Descasque bananas maduras e corte em pedaços de 2,5 cm.',
      'Arrume em assadeira forrada com papel manteiga.',
      'Congele por 2 horas, depois transfira para sacos etiquetados no freezer.',
      'Use em até 3 meses para melhor qualidade.'
    ],
    variations: [
      'Versão com Proteína Reforçada: Aumente o iogurte grego para 1/2 xícara + adicione 1 colher de sopa de linhaça moída. Nutrição: 26g carboidratos, 19g proteína, 6g fibras, 18g açúcar.',
      'Versão com Menos Açúcar: Use 1/2 banana pequena + 1/4 xícara de purê de maçã sem açúcar. Nutrição: 20g carboidratos, 12g proteína, 4g fibras, 14g açúcar.',
      'Versão Rica em Proteína: Adicione 1 colher de sopa extra de pasta de amendoim. Nutrição: 24g carboidratos, 16g proteína, 4g fibras.',
      'Dicas do Liquidificador: Adicione líquidos primeiro, depois sólidos para melhor mistura. Comece em velocidade baixa, aumente gradualmente para alta. Raspe as laterais uma vez se necessário para misturar uniformemente. Adicione mais líquido gradualmente se estiver muito grosso.'
    ]
  },
  {
    id: 'ovos-mexidos-espinafre-microondas',
    title: 'Ovos Mexidos com Espinafre e Queijo no Micro-ondas',
    category: 'breakfast',
    prepTime: '6 minutos',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '2 ovos grandes',
      '2 colheres de sopa de leite desnatado (2% gordura ou desnatado)',
      '1 xícara de espinafre fresco, picado grosseiramente (de saquinho, pré-lavado)',
      '1/4 xícara de pimentão, cortado em cubos (qualquer cor disponível)',
      '1/4 xícara de queijo ralado (cheddar, muçarela ou suíço)',
      '1/4 colher de chá de sal',
      '1/4 colher de chá de pimenta-do-reino',
      '1/8 colher de chá de alho em pó (opcional)',
      '1/2 colher de chá de azeite ou spray culinário'
    ],
    instructions: [
      'Em uma tigela própria para micro-ondas, passe azeite (você pode borrifar ou pincelar se quiser).',
      'Adicione o pimentão cortado em cubos e leve ao micro-ondas por 1 minuto para amolecer.',
      'Adicione o espinafre à tigela com os pimentões, leve ao micro-ondas por 30 segundos até murchar.',
      'Em tigela separada, bata os ovos com leite, sal, pimenta e alho em pó.',
      'Despeje a mistura de ovos sobre os vegetais na tigela do micro-ondas.',
      'Leve ao micro-ondas por 1 minuto, mexa delicadamente, depois leve por mais 30-45 segundos até os ovos ficarem firmes.',
      'Polvilhe com queijo, deixe descansar 30 segundos para derreter.',
      'Sirva imediatamente.'
    ],
    tips: [
      'Use pimentões pré-cortados do bar de saladas.',
      'Rale queijo no domingo para a semana.',
      'Mantenha tigelas próprias para micro-ondas designadas para cafés da manhã rápidos.'
    ],
    nutrition: {
      calories: 140,
      protein: '15g',
      carbs: '4g',
      fat: '8g'
    },
    mealPrep: [
      'Corte pimentões para a semana, guarde em recipiente hermético.',
      'Lave e pique espinafre se usar maços frescos.',
      'Rale queijo se comprar em bloco.',
      'Porcione temperos em pequenos recipientes.'
    ],
    variations: [
      'Versão Melhorada: Adicione 1 fatia de pão integral como acompanhamento + 1 colher de sopa de linhaça moída na mistura de ovos. Nutrição: 18g carboidratos, 19g proteína, 7g fibras.',
      'Versão Rica em Vegetais: Adicione 2 colheres de sopa de tomate cortado, espinafre extra. Nutrição: 6g carboidratos, 15g proteína, 2g fibras.',
      'Versão Rica em Proteína: Adicione 1 clara de ovo extra, 2 colheres de sopa de queijo cottage. Nutrição: 5g carboidratos, 22g proteína, 1g fibra.',
      'Dicas para Cozinhar no Micro-ondas: Use 70-80% da potência para evitar cozimento excessivo. Comece com tempo menor, adicione intervalos de 15 segundos conforme necessário. Mexa uma vez durante o cozimento para distribuição uniforme. Ovos devem estar firmes mas ainda ligeiramente úmidos.',
      'Preparo dos Vegetais: Corte pimentões uniformemente para cozimento uniforme. Remova talos grossos do espinafre, pique folhas grandes grosseiramente. Seque vegetais se houver excesso de água.',
      'Dicas de Segurança: Use apenas vidro ou cerâmica próprios para micro-ondas. Deixe descansar 30 segundos após cozinhar para distribuir o calor. Tenha cuidado com o vapor ao remover a cobertura da tigela.',
      'Versão Para Levar: Cozinhe normalmente, depois transfira para recipiente portátil. Reaqueça: 30 segundos no micro-ondas no trabalho. Mantém-se quente por 30 minutos se bem coberto.'
    ]
  },
  {
    id: 'aveia-proteica',
    title: 'Aveia Proteica',
    category: 'breakfast',
    prepTime: '5 minutos (na noite anterior)',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '1/3 xícara de aveia em flocos (aveia tradicional)',
      '1/2 xícara de leite desnatado (2% gordura ou desnatado)',
      '1/4 xícara de iogurte grego natural (2% gordura)',
      '1 colher de sopa de pasta de amendoim natural (sem açúcar adicionado)',
      '1/2 maçã média, cortada em cubos (com casca para fibras)',
      '1/4 colher de chá de canela em pó',
      '1/4 colher de chá de extrato de baunilha (opcional)',
      'Pitada de sal'
    ],
    instructions: [
      'Na noite anterior: Em um pote de vidro ou recipiente, misture aveia, leite, iogurte grego, pasta de amendoim, canela, baunilha e sal. Mexa bem até a pasta de amendoim se distribuir uniformemente.',
      'Adicionar fruta: Incorpore delicadamente os pedaços de maçã. Tampe bem e leve à geladeira durante a noite (mínimo 4 horas).',
      'Pela manhã: Retire da geladeira, mexa delicadamente e coma frio ou aqueça no micro-ondas por 30 segundos se desejar.'
    ],
    tips: [
      'Prepare 2-3 potes no domingo para vários dias.',
      'Corte maçãs antecipadamente e guarde separadamente, adicionando na manhã do consumo para evitar escurecimento.',
      'Use potes de boca larga para facilitar a mistura.'
    ],
    nutrition: {
      calories: 190,
      protein: '14g',
      carbs: '24g',
      fat: '6g'
    },
    mealPrep: [
      'Prepare 5 potes: Um para cada manhã da semana.',
      'Ingredientes secos primeiro: Misture aveia, canela e sal nos potes.',
      'Ingredientes líquidos: Adicione leite, iogurte, pasta de amendoim e baunilha.',
      'Fruta: Adicione na manhã do consumo para evitar escurecimento/textura mole.'
    ],
    variations: [
      'Versão Melhorada: Adicione 1 colher de sopa de linhaça moída misturada com a aveia. Nutrição: 25g carboidratos, 19g proteína, 9g fibras.',
      'Versão com Menos Açúcar: Substitua metade da maçã por 1/4 xícara de purê de maçã sem açúcar. Nutrição: 22g carboidratos, 14g proteína, 5g fibras, 8g açúcar.',
      'Versão Amantes de Chocolate: Adicione 1 colher de chá de cacau em pó sem açúcar + 1/4 colher de chá extra de canela. Nutrição: 25g carboidratos, 15g proteína, 7g fibras.',
      'Versão Tropical: Substitua maçã por 1/4 xícara de abacaxi picado + 1 colher de sopa de coco sem açúcar. Nutrição: 26g carboidratos, 15g proteína, 6g fibras.',
      'Outono Aconchegante: Adicione 1/8 colher de chá de noz-moscada + canela extra. Use maçãs Gala ou Fuji para doçura natural.',
      'Verão Fresco: Substitua maçã por 1/3 xícara de frutas vermelhas mistas. Adicione 1 colher de chá de raspas de limão para frescor. Nutrição: 22g carboidratos, 14g proteína, 7g fibras.',
      'Inverno Reconfortante: Adicione 1/8 colher de chá de gengibre em pó + 1/8 colher de chá de pimenta síria. Aqueça no micro-ondas antes de comer.',
      'Primavera Leve: Use metade maçã + 1/4 xícara de morangos picados. Adicione folhas de hortelã fresca se disponível. Nutrição: 23g carboidratos, 14g proteína, 6g fibras.'
    ]
  },
  {
    id: 'ovos-mexidos-vegetais',
    title: 'Ovos Mexidos com Vegetais',
    category: 'breakfast',
    prepTime: '10 minutos',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '2 ovos grandes',
      '2 claras de ovo (de caixinha ou separadas)',
      '1/2 xícara de champignon, fatiado',
      '1 xícara de espinafre fresco, picado grosseiramente',
      '1/4 xícara de pimentão, cortado em cubos (qualquer cor)',
      '1 colher de sopa de azeite de oliva',
      '1/4 colher de chá de sal',
      '1/4 colher de chá de pimenta-do-reino',
      '1/4 colher de chá de alho em pó (opcional)'
    ],
    instructions: [
      'Aqueça 1/2 colher de sopa de azeite em uma frigideira antiaderente grande em fogo médio. Adicione os champignons fatiados e o pimentão cortado em cubos. Refogue por 2-3 minutos até os champignons começarem a amolecer.',
      'Adicione o espinafre à frigideira e cozinhe por 1-2 minutos até murchar. Empurre os vegetais para um lado da frigideira.',
      'Em uma tigela, bata os ovos inteiros, as claras, sal, pimenta e alho em pó.',
      'Adicione o restante do azeite no lado vazio da frigideira, despeje a mistura de ovos e mexa com uma espátula por 2-3 minutos até os ovos formarem grumos macios.',
      'Incorpore delicadamente os vegetais aos ovos.'
    ],
    tips: [
      'Fatie os champignons e corte os pimentões na noite anterior.',
      'Use espinafre em saquinho pré-lavado para economizar tempo de lavagem.'
    ],
    nutrition: {
      calories: 168,
      protein: '18g',
      carbs: '6g',
      fat: '9g'
    },
    mealPrep: [
      'Fatie e armazene champignons e pimentões em potes herméticos na geladeira.',
      'Use espinafre pré-lavado para agilizar o preparo.'
    ],
    variations: [
      'Básico: Apenas os ovos mexidos com vegetais (6g carboidratos).',
      'Com Torrada: Adicione 1 fatia de pão integral (18g carboidratos totais, 8g fibras).',
      'Com Fruta: Adicione 1/2 xícara de frutas vermelhas (12g carboidratos totais, 6g fibras).',
      'Versão Reforçada: Adicione 1/4 xícara de queijo cottage como acompanhamento (8g carboidratos totais, 22g proteína).',
      'Estilo Mexicano: Pimentão + cebola + tomate + coentro.',
      'Mediterrâneo: Champignon + espinafre + tomate + orégano.',
      'Horta Fresca: Abobrinha + champignon + espinafre + ervas.',
      'Versão Inverno: Champignon + espinafre congelado + tomate em cubos enlatado.'
    ]
  },
  {
    id: 'tigela-cottage-maca-canela',
    title: 'Tigela de Cottage com Maçã e Canela',
    category: 'breakfast',
    prepTime: '10 minutos',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '1 xícara de queijo cottage light (4% gordura ou menos)',
      '1/4 xícara de aveia em flocos (aveia tradicional, crua)',
      '1 maçã média, sem caroço e cortada em cubos (com casca)',
      '1/2 colher de chá de canela em pó',
      '2 colheres de chá de mel',
      '2 colheres de sopa de amendoim, picado (sem sal)',
      '1/4 colher de chá de extrato de baunilha (opcional)',
      'Pitada de sal'
    ],
    instructions: [
      'Lave e corte a maçã em cubos (deixe a casca para obter fibras extras). Se preparar na noite anterior, misture a maçã cortada com algumas gotas de limão para evitar o escurecimento.',
      'Em uma tigela média, misture o queijo cottage, metade da canela (1/4 colher de chá), extrato de baunilha e uma pitada de sal. Misture delicadamente até ficar bem homogêneo.',
      'Divida a mistura de cottage entre duas tigelas de servir. Cubra cada uma com a maçã cortada, polvilhe com aveia, o restante da canela, amendoim picado e regue com mel.'
    ],
    tips: [
      'Corte a maçã na noite anterior e guarde tampada na geladeira.',
      'Pique amendoim em quantidade para a semana.',
      'Misture ingredientes secos (canela, sal) com antecedência.'
    ],
    nutrition: {
      calories: 190,
      protein: '16g',
      carbs: '22g',
      fat: '6g'
    },
    mealPrep: [
      'Corte maçã e armazene em pote tampado na geladeira.',
      'Pique amendoim e armazene em pote hermético.',
      'Misture ingredientes secos em recipiente pequeno para facilitar o preparo.'
    ],
    variations: [
      'Outono/Inverno: Use maçãs Gala ou Fuji para doçura extra. Adicione 1/4 colher de chá de noz-moscada com a canela. Substitua amendoim por nozes (se o orçamento permitir).',
      'Primavera/Verão: Substitua a maçã por 1/2 xícara de frutas vermelhas mistas. Reduza o mel para 1 colher de chá (frutas vermelhas adicionam doçura natural). Adicione folhas de hortelã fresca para decorar.',
      'Versão Econômica: Use queijo cottage de marca genérica. Escolha variedade de maçã em promoção. Use amendoim comum com sal (enxágue e seque se estiver muito salgado). Reduza o mel para 1 colher de chá.',
      'Versão Rica em Proteína: Aumente o queijo cottage para 1,25 xícaras (20g proteína). Adicione 1 colher de sopa de linhaça moída (+3g proteína, +3g fibras). Use queijo cottage 2% ou 4% para mais calorias.'
    ]
  },
  {
    id: 'torrada-abacate-completa',
    title: 'Torrada de Abacate Completa',
    category: 'breakfast',
    prepTime: '8 minutos',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '2 fatias de pão integral (procure por 3+ gramas de fibra por fatia)',
      '1/2 abacate maduro, amassado',
      '2 ovos cozidos grandes (preparados com antecedência)',
      '2 fatias de queijo (cheddar, suíço ou muçarela)',
      '1 colher de chá de suco de limão (fresco ou da garrafa)',
      '1/4 colher de chá de sal',
      '1/4 colher de chá de pimenta-do-reino',
      '1/8 colher de chá de alho em pó (opcional)'
    ],
    instructions: [
      'Torre as fatias de pão na torradeira enquanto separa os outros ingredientes. Descasque e corte os ovos cozidos em fatias.',
      'Em uma tigela pequena, amasse 1/2 abacate com suco de limão, sal, pimenta e alho em pó (se usar) até ficar liso mas ligeiramente encorpado.',
      'Espalhe a mistura de abacate uniformemente nas fatias de pão torrado. Coloque as fatias de ovo cozido por cima, depois adicione uma fatia de queijo em cada pedaço. Sirva imediatamente.'
    ],
    tips: [
      'Cozinhe ovos em lotes no domingo (guarde até 1 semana).',
      'Amasse o abacate antecipadamente se for servir várias pessoas.',
      'Mantenha o pão no freezer e torre diretamente congelado.'
    ],
    nutrition: {
      calories: 240,
      protein: '15g',
      carbs: '20g',
      fat: '12g'
    },
    mealPrep: [
      'Cozinhe 6-8 ovos para a semana.',
      'Corte o queijo antecipadamente e guarde em recipientes porcionados.',
      'Misture temperos do abacate (sal, pimenta, alho em pó).',
      'Mantenha o pão congelado para torrar instantaneamente.'
    ],
    variations: [
      'Verão Fresco: Adicione 2-3 fatias finas de tomate entre o ovo e o queijo. Polvilhe com manjericão fresco se disponível. Nutrição: 22g carboidratos, 15g proteína, 9g fibras.',
      'Outono Aconchegante: Adicione fatias finas de maçã e canela. Use queijo cheddar forte para sabor mais intenso. Nutrição: 25g carboidratos, 15g proteína, 9g fibras.',
      'Inverno Nutritivo: Substitua 1/2 abacate por 2 colheres de sopa de homus. Adicione fatias de pepino para crocância. Nutrição: 22g carboidratos, 16g proteína, 7g fibras.',
      'Primavera Verde: Adicione folhas de espinafre fresco sob o ovo. Use queijo com ervas se disponível. Nutrição: 20g carboidratos, 16g proteína, 9g fibras.'
    ]
  },
  {
    id: 'panquecas-simples-banana',
    title: 'Panquecas Simples de Banana',
    category: 'breakfast',
    prepTime: '15 minutos',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '1 banana madura média (com pontos marrons para doçura)',
      '1/3 xícara de farinha de trigo integral',
      '1 ovo grande',
      '1/4 xícara de leite desnatado (2% gordura ou desnatado)',
      '1/4 colher de chá de canela em pó',
      '1/4 colher de chá de extrato de baunilha (opcional)',
      '1/4 colher de chá de fermento em pó',
      'Uma pitada de sal',
      '1 colher de chá de azeite para cozinhar'
    ],
    instructions: [
      'Em uma tigela média, amasse a banana com um garfo até ficar quase lisa (pequenos pedaços são aceitáveis). Misture o ovo, leite, baunilha e canela até ficar bem homogêneo.',
      'Em uma tigela pequena, misture farinha, fermento e sal. Adicione os ingredientes secos à mistura de banana e mexa apenas até incorporar (não misture demais - pequenos grumos são normais).',
      'Aqueça o azeite em uma frigideira antiaderente em fogo médio. Despeje 2 colheres de sopa de massa por panqueca. Cozinhe por 2-3 minutos até formar bolhas na superfície, vire e cozinhe por 1-2 minutos até dourar. Repita com o restante da massa.'
    ],
    tips: [
      'Amasse bananas na noite anterior e guarde tampado.',
      'Misture ingredientes secos em quantidade no domingo.',
      'Use frigideira antiaderente para minimizar óleo necessário.'
    ],
    nutrition: {
      calories: 165,
      protein: '8g',
      carbs: '25g',
      fat: '4g'
    },
    mealPrep: [
      'Amasse bananas antecipadamente: Guarde em recipiente hermético até 2 dias.',
      'Misture ingredientes secos: Guarde em pote para acesso rápido.',
      'Meça ingredientes líquidos: Guarde na geladeira durante a noite.'
    ],
    variations: [
      'Versão Melhorada: Adicione 2 colheres de sopa de iogurte grego na massa + 1 colher de sopa de linhaça moída + sirva com 1 colher de sopa de pasta de amendoim. Nutrição: 28g carboidratos, 19g proteína, 8g fibras.',
      'Versão com Menos Açúcar: Use 1/2 banana + 1/4 xícara de purê de maçã sem açúcar. Nutrição: 20g carboidratos, 8g proteína, 5g fibras, 8g açúcar.',
      'Versão Rica em Proteína: Adicione 1 medida de proteína em pó de baunilha (reduza farinha para 1/4 xícara). Nutrição: 22g carboidratos, 28g proteína, 4g fibras.',
      'Coberturas Ricas em Proteína: Pasta de amendoim, iogurte grego, queijo cottage.',
      'Coberturas Ricas em Fibras: Frutas vermelhas frescas, nozes picadas, linhaça moída.',
      'Doçura Natural: Canela, frutas frescas, extrato de baunilha.',
      'Dicas de Cozimento: Massa grossa mas despejável, não misture demais, deixe descansar 2 minutos, fogo médio, vire uma vez, dourado uniforme.',
      'Preparo Dominical: Amasse bananas antecipadamente, misture ingredientes secos, meça líquidos.',
      'Para Congelar: Cozinhe panquecas extras, deixe esfriar, congele entre papel manteiga, reaqueça na torradeira ou micro-ondas.'
    ]
  },
  {
    id: 'rabanada-proteica',
    title: 'Rabanada Proteica',
    category: 'breakfast',
    prepTime: '3 minutos',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '2 fatias de pão integral (procure por 3+ gramas de fibra por fatia)',
      '2 ovos grandes',
      '2 colheres de sopa de iogurte grego natural (2% gordura)',
      '2 colheres de sopa de leite desnatado',
      '1/4 colher de chá de extrato de baunilha (opcional)',
      '1/4 colher de chá de canela em pó',
      'Uma pitada de sal',
      '1 colher de chá de azeite para cozinhar',
      'Uma pitada de pimenta-do-reino (opcional, para versão salgada)'
    ],
    instructions: [
      'Em um prato raso, bata os ovos, iogurte grego, leite, baunilha, canela e sal até ficar homogêneo. O iogurte grego adicionará espessura e proteína.',
      'Aqueça o azeite em uma frigideira antiaderente em fogo médio.',
      'Mergulhe rapidamente cada fatia de pão na mistura de ovos, cobrindo ambos os lados (não deixe de molho demais).',
      'Cozinhe as fatias de pão na frigideira por 1,5-2 minutos de cada lado até dourar e o ovo estar totalmente cozido. Sirva imediatamente.'
    ],
    tips: [
      'Tenha todos os ingredientes prontos antes de começar.',
      'Use frigideira antiaderente para minimizar o óleo necessário.',
      'Misture temperos secos antecipadamente em um recipiente pequeno.'
    ],
    nutrition: {
      calories: 175,
      protein: '15g',
      carbs: '18g',
      fat: '6g'
    },
    mealPrep: [
      'Mistura de ovos pode ser preparada na noite anterior e guardada na geladeira.',
      'Use pão de um dia para melhor absorção.',
      'Misture canela e sal com antecedência.'
    ],
    variations: [
      'Versão Básica: Como escrita acima. Melhor para café da manhã de fim de semana, amantes de comida reconfortante. Nutrição: 18g carboidratos, 15g proteína, 6g fibras. Método de cozimento: Frigideira simples no fogão.',
      'Versão Salgada: Substitua baunilha e canela por alho em pó e ervas. Adicione pitada de pimenta-do-reino na mistura de ovos. Nutrição igual à versão básica. Melhor para quem prefere cafés da manhã salgados.',
      'Versão com Frutas Vermelhas: Adicione 1/4 xícara de frutas vermelhas frescas por cima. Nutrição: 23g carboidratos, 15g proteína, 8g fibras. Melhor para antioxidantes e vitaminas extras.',
      'Versão Extra Proteína: Adicione 1 colher de sopa extra de iogurte grego na mistura. Nutrição: 18g carboidratos, 18g proteína, 6g fibras. Melhor para pós-treino ou necessidades de alta proteína.',
      'Coberturas: Frutas vermelhas frescas, xarope sem açúcar, castanhas picadas, canela extra.',
      'Acompanhamentos: Bacon de peru, tomates ou pepinos fatiados, abacate fatiado.',
      'Soluções para Sobras: Geladeira por até 2 dias, reaqueça na torradeira ou frigideira seca por 1 minuto de cada lado.'
    ]
  },
  {
    id: 'tigela-fresh-horta',
    title: 'Tigela Fresh de Horta',
    category: 'breakfast',
    prepTime: '8 minutos',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '1/2 xícara de queijo cottage light (4% gordura ou menos)',
      '1/2 pepino inglês médio, cortado em cubos (cerca de 3/4 xícara)',
      '1/2 xícara de tomate cereja, cortado pela metade',
      '2 ovos cozidos grandes (preparados com antecedência)',
      '2 colheres de sopa de sementes de girassol, descascadas (sem sal)',
      '1 colher de sopa de ervas frescas picadas (cebolinha, salsa ou endro)',
      '1 colher de chá de azeite extravirgem',
      '1 colher de chá de suco de limão (fresco ou da garrafa)',
      '1/4 colher de chá de sal',
      '1/4 colher de chá de pimenta-do-reino'
    ],
    instructions: [
      'Lave e corte o pepino em cubos de 1 cm.',
      'Corte os tomates cereja pela metade.',
      'Descasque e corte os ovos cozidos em fatias.',
      'Em duas tigelas de servir, divida o queijo cottage como base.',
      'Distribua o pepino cortado e os tomates pela metade ao redor e sobre o queijo cottage.',
      'Cubra cada tigela com fatias de ovo cozido, polvilhe com sementes de girassol e ervas frescas.',
      'Regue com azeite e suco de limão, tempere com sal e pimenta.'
    ],
    tips: [
      'Cozinhe ovos em lotes no domingo.',
      'Corte os vegetais na noite anterior.',
      'Mantenha as ervas frescas guardando os talos na água como flores.'
    ],
    nutrition: {
      calories: 165,
      protein: '18g',
      carbs: '8g',
      fat: '8g'
    },
    mealPrep: [
      'Cozinhe 6-8 ovos e guarde na geladeira para a semana.',
      'Lave e prepare vegetais, guarde em recipientes herméticos.',
      'Porcione queijo cottage em recipientes individuais para montagem rápida.',
      'Prepare mistura de ervas, pique e guarde em recipientes pequenos.'
    ],
    variations: [
      'Versão Melhorada: Adicione 1 colher de sopa de linhaça moída misturada ao queijo cottage + sirva com 1 fatia de pão integral. Nutrição: 20g carboidratos, 21g proteína, 8g fibras.',
      'Estilo Mediterrâneo: Adicione cebola roxa cortada, azeitonas kalamata, queijo feta. Substitua sementes de girassol por pinhões (se o orçamento permitir). Nutrição: 10g carboidratos, 19g proteína, 3g fibras.',
      'Colheita da Horta: Adicione pimentão cortado, cenoura ralada, fatias de rabanete. Ervas: manjericão e orégano frescos. Nutrição: 12g carboidratos, 18g proteína, 4g fibras.',
      'Primavera Fresca: Endro, cebolinha e salsa frescos, rabanetes fatiados finamente, espinafre baby, raspas de limão.',
      'Verão Abundante: Pimentões coloridos, grãos de milho fresco, manjericão fresco, variedades de tomate cereja, respingo de vinagre balsâmico.',
      'Outono Reconfortante: Pimentão vermelho assado, sementes de abóbora tostadas, tomilho e sálvia frescos, vinagre de maçã.',
      'Inverno Acolhedor: Pimentões cortados, repolho ralado, ervas secas se as frescas não estiverem disponíveis, temperos quentes como páprica.'
    ]
  },
  {
    id: 'frango-ervas-vegetais-uma-panela',
    title: 'Frango com Ervas e Vegetais de Uma Panela Só',
    category: 'dinner',
    prepTime: '18 minutos',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '680g sobrecoxas de frango desossadas (6 sobrecoxas), sem pele',
      '450g batatas pequenas, cortadas em cubos de 2,5 cm (batatas Yukon ou vermelhas)',
      '3 xícaras de floretes de brócolis (cerca de 1 cabeça grande)',
      '2 cenouras grandes, descascadas e cortadas em pedaços de 2,5 cm',
      '1 cebola amarela média, cortada em gomos',
      '3 colheres de sopa de azeite de oliva',
      '1 colher de chá de orégano seco',
      '1 colher de chá de tomilho seco',
      '1 colher de chá de alho em pó',
      '1 colher de chá de sal',
      '1/2 colher de chá de pimenta-do-reino',
      '1/2 colher de chá de páprica (opcional, para cor)'
    ],
    instructions: [
      'Pré-aqueça o forno a 230°C. Forre uma assadeira grande com papel manteiga.',
      'Corte as batatas em cubos de 2,5 cm, as cenouras em pedaços e a cebola em gomos.',
      'Separe o brócolis em floretes uniformes.',
      'Em uma tigela grande, misture os vegetais cortados com 2 colheres de sopa de azeite de oliva, 1/2 colher de chá de sal e 1/4 colher de chá de pimenta-do-reino.',
      'Espalhe na assadeira, deixando espaço para o frango.',
      'Seque as sobrecoxas de frango com papel toalha, esfregue com o restante de 1 colher de sopa de azeite de oliva.',
      'Misture o orégano, tomilho, alho em pó, o sal e a pimenta restantes, e a páprica. Tempere o frango completamente com a mistura de temperos.',
      'Coloque o frango temperado na assadeira com os vegetais. Asse por 15-18 minutos até o frango atingir 74°C de temperatura interna e os vegetais ficarem macios com bordas caramelizadas.'
    ],
    tips: [
      'Pré-corte os vegetais na noite anterior e guarde na geladeira.',
      'Use um termômetro de carne para um cozimento preciso.',
      'Papel manteiga elimina a necessidade de esfregar a assadeira.'
    ],
    nutrition: {
      calories: 285,
      protein: '32g',
      carbs: '22g',
      fat: '12g'
    },
    mealPrep: [
      'Preparo de vegetais: Lave, corte e guarde os vegetais em recipientes herméticos (duram 3-4 dias).',
      'Preparo da mistura de temperos: Misture os temperos secos em um pequeno pote (rende 4-5 porções).',
      'Preparo do frango: Apare e porcione as sobrecoxas de frango, guarde na geladeira.',
      'Configuração do equipamento: Certifique-se de que as assadeiras estejam limpas e o papel manteiga disponível.'
    ],
    variations: [
      'Colheita de Outono: Substitua o brócolis por couve de Bruxelas (quando em promoção). Adicione 1 maçã picada para uma doçura sutil. Use alecrim em vez de orégano para um sabor aquecedor.',
      'Estilo Mediterrâneo: Adicione 2 colheres de sopa de azeitonas pretas fatiadas. Inclua 1 tomate picado nos últimos 5 minutos de cozimento. Use manjericão seco com orégano.',
      'Inspirado Mexicano: Substitua as ervas por 1 colher de chá de pimenta em pó e 1/2 colher de chá de cominho. Adicione pimentões picados em vez de brócolis. Sirva com gomos de limão e coentro fresco.'
    ]
  },
  {
    id: 'salteado-carne-vegetais-asiatico',
    title: 'Salteado Rápido de Carne Bovina e Vegetais ao Estilo Asiático',
    category: 'dinner',
    prepTime: '15 minutos',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '450g carne bovina (alcatra), cortada em tiras finas (ou carne pré-cortada para saltear)',
      '2 xícaras de arroz integral pré-cozido (da seção refrigerada ou sachês de micro-ondas)',
      '2 pimentões grandes (qualquer cor), cortados em tiras',
      '2 cenouras médias, fatiadas diagonalmente em rodelas finas',
      '1 cebola amarela grande, cortada em gomos',
      '3 dentes de alho, picados',
      '1 colher de sopa de gengibre fresco picado (ou 1 colher de chá de gengibre em pó)',
      '2 colheres de sopa de óleo vegetal',
      '3 colheres de sopa de molho shoyu com baixo teor de sódio',
      '1 colher de sopa de vinagre de arroz (ou vinagre branco)',
      '1 colher de sopa de amido de milho',
      '2 colheres de sopa de água',
      '1/2 colher de chá de sal',
      '1/4 colher de chá de pimenta-do-reino',
      '1/4 colher de chá de flocos de pimenta vermelha (opcional)'
    ],
    instructions: [
      'Aqueça uma frigideira grande em fogo alto. Enquanto aquece, misture o molho shoyu, o vinagre, o amido de milho e a água em uma tigela pequena para o molho. Reserve.',
      'Adicione 1 colher de sopa de óleo à panela quente.',
      'Adicione as tiras de carne bovina em uma única camada, sem superlotar.',
      'Cozinhe por 2-3 minutos sem mexer até dourar.',
      'Mexa uma vez e cozinhe por mais 1 minuto.',
      'Retire a carne para um prato.',
      'Adicione o óleo restante à mesma panela.',
      'Adicione as cenouras e as cebolas, salteie por 2 minutos.',
      'Adicione os pimentões, salteie por mais 2 minutos até os vegetais ficarem macios e crocantes.',
      'Adicione o alho e o gengibre, salteie por 30 segundos até ficarem perfumados.',
      'Retorne a carne à panela. Adicione a mistura do molho, mexa tudo junto por 1-2 minutos até o molho engrossar.',
      'Tempere com sal, pimenta-do-reino e flocos de pimenta vermelha. Sirva imediatamente sobre o arroz integral quente.'
    ],
    tips: [
      'Compre carne bovina e vegetais pré-cortados para saltear, se disponíveis.',
      'Aqueça o arroz de acordo com as instruções da embalagem enquanto cozinha.',
      'Use uma frigideira grande para um cozimento uniforme e mais rápido.'
    ],
    nutrition: {
      calories: 275,
      protein: '28g',
      carbs: '24g',
      fat: '9g'
    },
    mealPrep: [
      'Preparo da carne: Corte em tiras, porcione em recipientes, guarde por até 3 dias.',
      'Preparo de vegetais: Lave, corte e guarde os vegetais em recipientes herméticos (duram 4-5 dias).',
      'Mistura do molho: Pré-misture os ingredientes do molho em pequenos potes (rende 3-4 porções).',
      'Estratégia do arroz: Cozinhe uma grande quantidade de arroz integral, porcione e refrigere para um reaquecimento rápido.'
    ],
    variations: [
      'Estilo Fajita Mexicana: Substitua o gengibre por cominho e pimenta em pó. Adicione tomates e jalapeños picados. Sirva com gomos de limão e coentro fresco.',
      'Estilo Mediterrâneo: Use orégano e manjericão em vez de gengibre. Adicione tomates picados e azeitonas pretas. Inclua queijo feta esfarelado como guarnição.',
      'Inspirado na Itália: Substitua o molho shoyu por vinagre balsâmico. Adicione tomates picados e manjericão fresco. Sirva sobre arroz integral com queijo parmesão.'
    ]
  },
  {
    id: 'peixe-branco-vegetais-assados',
    title: 'Peixe Branco Assado com Vegetais Assados',
    category: 'dinner',
    prepTime: '18 minutos',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '680g filés de peixe branco (bacalhau, tilápia ou similar), cerca de 170g por porção',
      '450g aspargos, com as pontas aparadas e cortados em pedaços de 5 cm',
      '2 abobrinhas médias, fatiadas em rodelas de 1,5 cm',
      '1 cebola roxa média, cortada em gomos',
      '1 xícara de tomate cereja (opcional, para cor e sabor)',
      '3 colheres de sopa de azeite de oliva',
      '4 dentes de alho, picados',
      '1 colher de chá de orégano seco',
      '1 colher de chá de manjericão seco',
      '1/2 colher de chá de páprica',
      '1 colher de chá de sal',
      '1/2 colher de chá de pimenta-do-reino',
      '1 limão grande, cortado em gomos',
      '2 colheres de sopa de salsinha fresca, picada (para guarnecer)'
    ],
    instructions: [
      'Pré-aqueça o forno a 220°C. Forre uma assadeira grande com papel manteiga.',
      'Corte os aspargos em pedaços de 5 cm, fatie a abobrinha em rodelas e a cebola em gomos.',
      'Em uma tigela grande, misture os vegetais com 2 colheres de sopa de azeite de oliva, metade do alho, orégano, manjericão, 1/2 colher de chá de sal e 1/4 colher de chá de pimenta-do-reino.',
      'Espalhe na assadeira em uma única camada.',
      'Seque o peixe com papel toalha.',
      'Esfregue com o restante de 1 colher de sopa de azeite de oliva, o alho restante, páprica, o sal e a pimenta restantes.',
      'Coloque o peixe na assadeira com os vegetais.',
      'Asse por 12-15 minutos até o peixe se desfazer facilmente com um garfo e os vegetais estarem macios com uma leve caramelização.',
      'Guarneça com salsinha fresca e sirva com gomos de limão.'
    ],
    tips: [
      'Compre vegetais pré-cortados, se disponíveis.',
      'Use papel manteiga para facilitar a limpeza.',
      'O peixe está pronto quando se desfaz facilmente.'
    ],
    nutrition: {
      calories: 250,
      protein: '32g',
      carbs: '16g',
      fat: '8g'
    },
    mealPrep: [
      'Porcione o peixe: Compre porções maiores, corte em tamanhos de porção, guarde por até 2 dias.',
      'Preparo de vegetais: Lave, corte e guarde os vegetais em recipientes (duram 4-5 dias).',
      'Misturas de temperos: Pré-misture ervas e especiarias secas em pequenos recipientes.',
      'Configuração do equipamento: Certifique-se de que as assadeiras estejam limpas e o papel manteiga disponível.'
    ],
    variations: [
      'Horta de Primavera: Substitua a abobrinha por vagem fresca. Adicione rabanetes cortados ao meio. Use manjericão fresco em vez de ervas secas.',
      'Abundância de Verão: Adicione abóbora amarela com a abobrinha. Inclua tomates cereja frescos e grãos de milho. Use manjericão e orégano frescos, se disponíveis.',
      'Colheita de Outono: Substitua os aspargos por couve de Bruxelas (cortadas ao meio). Adicione abóbora moranga picada. Tempere com tomilho e alecrim.'
    ]
  },
  {
    id: 'costeletas-porco-vagem-cogumelos',
    title: 'Costeletas de Porco Simples com Salteado de Vagem e Cogumelos',
    category: 'dinner',
    prepTime: '15 minutos',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '4 costeletas de porco finas (cerca de 140g cada, 1,5 cm de espessura)',
      '2 colheres de sopa de azeite de oliva, divididas',
      '450g vagem fresca, aparada e cortada em pedaços de 5 cm',
      '225g cogumelos Paris, fatiados (cerca de 2 xícaras)',
      '1 cebola média, fatiada (cerca de 1 xícara)',
      '3 dentes de alho, picados (cerca de 1 colher de sopa)',
      '1 colher de chá de sal, dividida',
      '1/2 colher de chá de pimenta-do-reino preta, dividida',
      '1/2 colher de chá de páprica',
      '1/2 colher de chá de tomilho seco (ou 1 colher de sopa de fresco)',
      '1/4 xícara de caldo de galinha com baixo teor de sódio',
      '2 colheres de sopa de suco de limão (cerca de 1/2 limão)'
    ],
    instructions: [
      'Tempere as costeletas de porco com 1/2 colher de chá de sal, 1/4 colher de chá de pimenta-do-reino e a páprica em ambos os lados.',
      'Aqueça 1 colher de sopa de azeite de oliva em uma frigideira grande em fogo médio-alto.',
      'Adicione as costeletas de porco à frigideira quente.',
      'Cozinhe por 3-4 minutos de cada lado até ficarem douradas e cozidas por completo (temperatura interna 63°C).',
      'Retire para um prato e cubra com papel alumínio para manter aquecido.',
      'Adicione o azeite de oliva restante à mesma frigideira.',
      'Adicione a vagem e cozinhe por 2-3 minutos, mexendo frequentemente.',
      'Adicione os cogumelos fatiados e as cebolas à frigideira. Cozinhe por 2 minutos, mexendo ocasionalmente.',
      'Adicione o alho e o tomilho, cozinhe por 30 segundos até ficarem perfumados.',
      'Adicione o caldo de galinha e o suco de limão. Tempere com o sal e a pimenta restantes.',
      'Cozinhe por 1 minuto até os vegetais ficarem macios e crocantes.',
      'Retorne as costeletas de porco à frigideira brevemente para aquecerem.'
    ],
    tips: [
      'Compre vagem pré-aparada ou use congelada.',
      'Fatie os cogumelos e as cebolas enquanto a carne está cozinhando.',
      'Use uma frigideira grande para minimizar a louça.'
    ],
    nutrition: {
      calories: 265,
      protein: '29g',
      carbs: '10g',
      fat: '12g'
    },
    mealPrep: [
      'Vegetais podem ser picados na noite anterior.',
      'Dobre a receita para sobras e preparo de refeições.',
      'Refrigere por até 3 dias, reaqueça delicadamente.',
      'A carne de porco congela bem; os vegetais são melhores frescos.'
    ],
    variations: [
      'Básico: Carne de porco e vegetais sozinhos (10g carboidratos, 4g fibra).',
      'Com Amido: Adicione 1/3 xícara de arroz integral (25g carboidratos totais, 6g fibra).',
      'Com Salada: Adicione uma salada verde mista grande com vinagrete (14g carboidratos totais, 7g fibra).',
      'Versão Robusta: Adicione 1/2 xícara de brócolis cozido no vapor (16g carboidratos totais, 8g fibra).',
      'Mediterrâneo: Abobrinha + pimentões + tomates + orégano.',
      'Asiático: Ervilha de neve + cogumelos + gengibre + óleo de gergelim.',
      'Estilo Outono: Couve de Bruxelas + cogumelos + tomilho.',
      'Frescor de Verão: Abobrinha + abóbora amarela + manjericão.',
      'Primavera: Aspargos e cogumelos com ervas frescas.',
      'Verão: Abobrinha e pimentões com manjericão.',
      'Outono: Couve de Bruxelas e cogumelos com sálvia.',
      'Inverno: Vagem e cogumelos com tomilho (receita atual).'
    ]
  },
  {
    id: 'hamburgueres-frango-mediterraneos',
    title: 'Hambúrgueres de Frango Mediterrâneos',
    category: 'dinner',
    prepTime: '16 minutos',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '450g frango moído (93% magro)',
      '4 pães de hambúrguer integrais médios',
      '1/4 xícara de farinha de rosca (integral, simples)',
      '1/2 cebola média, picada finamente (cerca de 1/2 xícara)',
      '3 dentes de alho, picados (cerca de 1 colher de sopa)',
      '1 ovo grande',
      '1 colher de chá de orégano seco',
      '1/2 colher de chá de sal',
      '1/4 colher de chá de pimenta-do-reino',
      '1 colher de sopa de azeite de oliva (para cozinhar)',
      '1 tomate médio, fatiado',
      '4 folhas grandes de alface',
      '1/4 cebola roxa, fatiada finamente (opcional)',
      '1 colher de sopa de suco de limão (cerca de 1/2 limão)'
    ],
    instructions: [
      'Em uma tigela grande, combine o frango moído, a farinha de rosca, a cebola picada, o alho picado, o ovo, o orégano, o sal e a pimenta-do-reino.',
      'Misture delicadamente até apenas combinar (não misture demais).',
      'Forme 4 hambúrgueres iguais, com cerca de 2 cm de espessura.',
      'Aqueça o azeite de oliva em uma frigideira grande em fogo médio-alto.',
      'Enquanto o óleo aquece, toste levemente os pães de hambúrguer, se desejar.',
      'Adicione os hambúrgueres de frango à frigideira quente.',
      'Cozinhe por 6-7 minutos de cada lado até ficarem dourados e cozidos por completo (temperatura interna 74°C).',
      'Não pressione os hambúrgueres.',
      'Retire os hambúrgueres do fogo, regue com suco de limão.',
      'Monte os hambúrgueres: pão inferior, alface, hambúrguer de frango, fatias de tomate, cebola roxa (se usar), pão superior.'
    ],
    tips: [
      'Forme os hambúrgueres enquanto a frigideira aquece.',
      'Fatie os vegetais enquanto o frango cozinha.',
      'Use um termômetro de carne para um cozimento perfeito sem adivinhar.'
    ],
    nutrition: {
      calories: 275,
      protein: '28g',
      carbs: '22g',
      fat: '9g'
    },
    mealPrep: [
      'Forme os hambúrgueres e refrigere por até 24 horas.',
      'Cozinhe hambúrgueres extras para porções de almoço.',
      'Hambúrgueres cozidos refrigeram por 3 dias, congelam por 3 meses.',
      'Reaqueça no micro-ondas por 30-45 segundos ou aqueça gentilmente na frigideira.'
    ],
    variations: [
      'Básico: Hambúrguer com pão (22g carboidratos, 4g fibra).',
      'Com Salada Lateral: Adicione uma salada verde mista grande com vinagrete (25g carboidratos totais, 7g fibra).',
      'Estilo Aberto (Open-Face): Pule a parte superior do pão, adicione vegetais extras (15g carboidratos totais, 6g fibra).',
      'Com Vegetais Assados: Adicione 1/2 xícara de abobrinha e pimentões assados (26g carboidratos totais, 8g fibra).',
      'Estilo Grego: Adicione esfarelados de queijo feta e pepino.',
      'Estilo Italiano: Adicione manjericão fresco e tomate com balsâmico.',
      'Com Ervas Aprimoradas: Adicione manjericão seco e tomilho à mistura.',
      'Limão e Ervas: Aumente o suco de limão e adicione salsinha fresca.',
      'Wrap de Alface: Use folhas grandes de alface em vez de pão (6g carboidratos).',
      'Pão de Portobello: Use cogumelos portobello grelhados (8g carboidratos).',
      'Pão de Couve-Flor: Use rodelas de couve-flor assadas (10g carboidratos).'
    ]
  },
  {
    id: 'chilli-rapido-carne-feijao',
    title: 'Chilli Rápido de Carne Moída e Feijão',
    category: 'dinner',
    prepTime: '18 minutos',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '450g carne moída (85% magra)',
      '1 colher de sopa de azeite de oliva',
      '1 cebola média, picada em cubos (cerca de 1 xícara)',
      '1 pimentão, picado em cubos (qualquer cor, cerca de 1 xícara)',
      '3 dentes de alho, picados (cerca de 1 colher de sopa)',
      '1 lata (425g) de feijão preto, escorrido e enxaguado',
      '1 lata (425g) de feijão-vermelho, escorrido e enxaguado',
      '1 lata (410g) de tomates picados, com suco',
      '2 colheres de sopa de extrato de tomate',
      '1 colher de sopa de pimenta em pó (chili powder)',
      '1 colher de chá de cominho moído',
      '1 colher de chá de páprica',
      '1/2 colher de chá de sal (ou a gosto)',
      '1/4 colher de chá de pimenta-do-reino',
      '1/2 xícara de água ou caldo de carne com baixo teor de sódio'
    ],
    instructions: [
      'Aqueça o azeite de oliva em uma panela grande ou forno holandês em fogo médio-alto.',
      'Adicione a carne moída e cozinhe, desfazendo com uma colher, até dourar (cerca de 3 minutos).',
      'Empurre a carne para um lado da panela. Adicione a cebola picada e o pimentão picado ao lado vazio.',
      'Cozinhe por 2-3 minutos até os vegetais começarem a amolecer.',
      'Adicione o alho picado e cozinhe por 1 minuto até ficar perfumado.',
      'Misture tudo junto.',
      'Adicione o extrato de tomate e mexa por 1 minuto.',
      'Adicione a pimenta em pó, o cominho e a páprica.',
      'Cozinhe por 1 minuto até as especiarias ficarem perfumadas.',
      'Adicione os tomates picados com suco, ambos os feijões, sal, pimenta-do-reino e o caldo (ou água).',
      'Leve para ferver, então reduza o fogo para médio-baixo e cozinhe em fogo brando por 6-7 minutos, mexendo ocasionalmente, até engrossar ligeiramente.'
    ],
    tips: [
      'Pique os vegetais enquanto a carne está dourando.',
      'Use alho pré-picado para economizar tempo de preparo.',
      'Mantenha produtos enlatados em uma área de fácil acesso na despensa.'
    ],
    nutrition: {
      calories: 285,
      protein: '31g',
      carbs: '24g',
      fat: '9g'
    },
    mealPrep: [
      'Dura 3-4 dias na geladeira, os sabores melhoram de um dia para o outro.',
      'Congela bem por até 3 meses em porções.',
      'Adicione um pouco de caldo se estiver muito espesso ao reaquecer.'
    ],
    variations: [
      'Básico: Chilli sozinho (24g carboidratos, 12g fibra).',
      'Com Arroz: Adicione 1/4 xícara de arroz integral (35g carboidratos totais, 14g fibra).',
      'Com Salada: Adicione uma salada grande com vinagrete (27g carboidratos totais, 15g fibra).',
      'Com Cobertura: Adicione 1 colher de sopa de queijo ralado + 1 colher de sopa de iogurte grego (26g carboidratos totais, 12g fibra).'
    ]
  },
  {
    id: 'macarrao-frango-vegetais',
    title: 'Macarrão Rápido de Frango e Vegetais',
    category: 'dinner',
    prepTime: '20 minutos',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '170g macarrão integral (cerca de 1,5 xícara seca - penne ou rotini)',
      '450g peito de frango sem osso e sem pele, cortado em pedaços de 2,5 cm',
      '2 colheres de sopa de azeite de oliva, divididas',
      '2 abobrinhas médias, picadas em cubos (cerca de 2 xícaras)',
      '1 cebola média, picada em cubos (cerca de 1 xícara)',
      '4 dentes de alho, picados (cerca de 1 colher de sopa)',
      '1 lata (410g) de tomates picados, com suco',
      '1/2 xícara de caldo de galinha com baixo teor de sódio',
      '1 colher de chá de orégano seco',
      '1 colher de chá de manjericão seco (ou 2 colheres de sopa de fresco)',
      '3/4 colher de chá de sal, dividido',
      '1/2 colher de chá de pimenta-do-reino, dividida',
      '1/4 xícara de queijo parmesão ralado (opcional)',
      '2 colheres de sopa de salsinha fresca picada (opcional, para guarnecer)'
    ],
    instructions: [
      'Leve uma panela grande de água salgada para ferver para o macarrão.',
      'Corte o frango em pedaços do tamanho de uma mordida e tempere com 1/2 colher de chá de sal e 1/4 colher de chá de pimenta-do-reino.',
      'Adicione o macarrão à água fervente e cozinhe de acordo com as instruções da embalagem (geralmente 8-10 minutos).',
      'Enquanto o macarrão cozinha, aqueça 1 colher de sopa de azeite de oliva em uma frigideira grande em fogo médio-alto.',
      'Adicione o frango temperado à frigideira quente.',
      'Cozinhe por 5-6 minutos, mexendo ocasionalmente, até o frango ficar dourado e cozido por completo.',
      'Retire o frango para um prato.',
      'Adicione o azeite de oliva restante à mesma frigideira.',
      'Adicione a abobrinha e a cebola picadas.',
      'Cozinhe por 3-4 minutos até os vegetais começarem a amolecer.',
      'Adicione o alho, orégano e manjericão.',
      'Cozinhe por 30 segundos até ficarem perfumados.',
      'Adicione os tomates enlatados com suco e o caldo de galinha.',
      'Leve para ferver. Retorne o frango à frigideira.',
      'Escorra o macarrão e adicione à frigideira com os vegetais e o frango.',
      'Misture tudo junto. Tempere com o sal e a pimenta restantes.',
      'Sirva com queijo parmesão e salsinha, se usar.'
    ],
    tips: [
      'Corte o frango enquanto a água ferve.',
      'Use a mesma frigideira para o frango e os vegetais para construir sabores.',
      'Tenha todos os ingredientes preparados antes de começar.'
    ],
    nutrition: {
      calories: 295,
      protein: '30g',
      carbs: '24g',
      fat: '8g'
    },
    mealPrep: [
      'Pique os vegetais e o frango com até 24 horas de antecedência.',
      'Dobre a receita para sobras e preparo de refeições.',
      'Refrigere por até 3 dias, adicione um pouco de caldo ao reaquecer.',
      'O prato cozido congela bem por até 2 meses.'
    ],
    variations: [
      'Básico: Macarrão com frango e vegetais (24g carboidratos, 5g fibra).',
      'Com Salada: Adicione uma salada verde mista grande com vinagrete (27g carboidratos totais, 7g fibra).',
      'Vegetais Extras: Dobre a porção de abobrinha (26g carboidratos totais, 7g fibra).',
      'Com Queijo: Adicione queijo parmesão extra (24g carboidratos totais, 5g fibra, +3g proteína).',
      'Penne: Retém bem o molho, amplamente disponível.',
      'Rotini: Espirais que capturam bem os vegetais.',
      'Rigatoni: Tubos grandes funcionam bem com molho encorpado.',
      'Espaguete integral: Opção clássica, tempo de cozimento mais longo.',
      'Estilo Italiano: Abobrinha + pimentões + cogumelos.',
      'Horta Fresca: Abobrinha + abóbora amarela + tomate cereja.',
      'Mediterrâneo: Abobrinha + berinjela + tomates.',
      'Clássico Simples: Abobrinha + cebola (receita atual).'
    ]
  },
  {
    id: 'peixe-assado-vegetais-mediterraneos',
    title: 'Peixe Assado com Vegetais Mediterrâneos em Assadeira',
    category: 'dinner',
    prepTime: '18 minutos',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '4 filés de peixe branco (cerca de 170g cada - bacalhau, tilápia ou similar)',
      '2 abobrinhas médias, fatiadas em rodelas (cerca de 2 xícaras)',
      '2 xícaras de tomate cereja, cortados ao meio',
      '1/3 xícara de azeitonas Kalamata, sem caroço e cortadas ao meio (ou azeitonas pretas comuns)',
      '1/2 cebola roxa média, fatiada finamente (cerca de 1/2 xícara)',
      '3 colheres de sopa de azeite de oliva, divididas',
      '4 dentes de alho, picados (cerca de 1 colher de sopa)',
      '1 colher de chá de orégano seco',
      '1 colher de chá de manjericão seco',
      '1/2 colher de chá de páprica',
      '3/4 colher de chá de sal, dividido',
      '1/2 colher de chá de pimenta-do-reino, dividida',
      '1 limão grande, suco e raspas (cerca de 3 colheres de sopa de suco)',
      '2 colheres de sopa de salsinha fresca picada (opcional, para guarnecer)'
    ],
    instructions: [
      'Pré-aqueça o forno a 220°C. Forre uma assadeira grande com bordas com papel manteiga ou unte levemente com óleo.',
      'Em uma tigela grande, combine a abobrinha fatiada, os tomates cereja cortados ao meio, a cebola roxa e as azeitonas.',
      'Regue com 2 colheres de sopa de azeite de oliva, adicione o alho picado, orégano, manjericão, 1/2 colher de chá de sal e 1/4 colher de chá de pimenta-do-reino. Misture para combinar.',
      'Espalhe a mistura de vegetais uniformemente na assadeira preparada. Asse por 8 minutos enquanto prepara o peixe.',
      'Seque os filés de peixe com papel toalha.',
      'Pincele os dois lados com o azeite de oliva restante e tempere com o sal e a pimenta-do-reino restantes.',
      'Adicione as raspas de limão.',
      'Retire a assadeira do forno, arrume os filés de peixe entre os vegetais.',
      'Regue tudo com suco de limão.',
      'Retorne ao forno e asse por 8-10 minutos até o peixe se desfazer facilmente com um garfo.',
      'Guarneça com salsinha, se usar.'
    ],
    tips: [
      'Use vegetais pré-fatiados, se disponíveis.',
      'Seque o peixe com papel toalha enquanto os vegetais estão no forno.',
      'Tenha o suco e as raspas de limão prontos antes de retirar a assadeira do forno.'
    ],
    nutrition: {
      calories: 285,
      protein: '32g',
      carbs: '9g',
      fat: '12g'
    },
    mealPrep: [
      'Pique os vegetais com até 2 dias de antecedência, guarde coberto.',
      'O peixe pode ser temperado com até 4 horas de antecedência.',
      'O prato cozido refrigera por 2 dias, o peixe é melhor fresco.',
      'Dobre os vegetais, cozinhe extra para marmitas.'
    ],
    variations: [
      'Básico: Peixe e vegetais sozinhos (9g carboidratos, 3g fibra).',
      'Com Salada: Adicione uma salada verde mista grande com vinagrete (12g carboidratos totais, 5g fibra).',
      'Com Couve-flor: Adicione 1/2 xícara de couve-flor assada (12g carboidratos totais, 6g fibra).',
      'Com Quinoa: Adicione 1/4 xícara de quinoa cozida (20g carboidratos totais, 5g fibra).',
      'Estilo Italiano: Adicione manjericão fresco e um fio de vinagre balsâmico.',
      'Estilo Grego: Adicione queijo feta esfarelado e pepino.',
      'Estilo Espanhol: Adicione pimentões vermelhos e páprica defumada.',
      'Estilo Provençal: Adicione erva-doce e tomilho fresco.',
      'Bacalhau: Sabor suave, textura escamosa, muito acessível.',
      'Tilápia: Econômica, sabor neutro, cozinha rápido.',
      'Halibut: Textura mais firme se o orçamento permitir.',
      'Salmão: Mais ômega-3 se preferir (adiciona 2 minutos de cozimento).'
    ]
  },
  {
    id: 'refogado-feijao-arroz-integral',
    title: 'Refogado Rápido de Feijão e Arroz Integral',
    category: 'dinner',
    prepTime: '17 minutos',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '2 colheres de sopa de azeite de oliva',
      '1 cebola média, picada em cubos (cerca de 1 xícara)',
      '1 pimentão grande, picado em cubos (qualquer cor, cerca de 1 xícara)',
      '3 dentes de alho, picados (cerca de 1 colher de sopa)',
      '1 lata (425g) de feijão preto, escorrido e enxaguado',
      '1 lata (425g) de feijão-vermelho, escorrido e enxaguado',
      '1 lata (410g) de tomates picados, com suco',
      '2 xícaras de arroz integral pré-cozido (de sachês para micro-ondas ou sobras)',
      '1/2 xícara de caldo de vegetais com baixo teor de sódio',
      '1 colher de chá de cominho moído',
      '1 colher de chá de pimenta em pó (chili powder)',
      '1/2 colher de chá de orégano seco',
      '1/2 colher de chá de sal (ou a gosto)',
      '1/4 colher de chá de pimenta-do-reino',
      '2 colheres de sopa de coentro fresco picado (opcional, para guarnecer)'
    ],
    instructions: [
      'Aqueça o azeite de oliva em uma frigideira grande ou panela rasa em fogo médio-alto.',
      'Adicione a cebola picada e o pimentão picado.',
      'Refogue por 3 minutos até os vegetais começarem a amolecer.',
      'Adicione o alho picado, o cominho, a pimenta em pó e o orégano.',
      'Cozinhe por 1 minuto até as especiarias ficarem perfumadas.',
      'Adicione os feijões escorridos, os tomates picados com suco e o caldo de vegetais.',
      'Mexa para combinar e leve para ferver.',
      'Reduza o fogo para médio-baixo e cozinhe em fogo brando por 5 minutos, mexendo ocasionalmente, até o líquido reduzir ligeiramente.',
      'Adicione o arroz integral pré-cozido e aqueça por 2-3 minutos.',
      'Tempere com sal e pimenta-do-reino a gosto. Guarneça com coentro fresco, se usar.'
    ],
    tips: [
      'Use cebola e pimentão congelados pré-picados para economizar tempo de corte.',
      'Mantenha feijões e tomates enlatados de fácil acesso na despensa.',
      'Pré-cozinhe o arroz em lotes nos fins de semana.'
    ],
    nutrition: {
      calories: 235,
      protein: '16g',
      carbs: '25g',
      fat: '7g'
    },
    mealPrep: [
      'Pique os vegetais e guarde-os cobertos por até 2 dias.',
      'Dobre a receita; as porções congelam bem por 3 meses.',
      'Refrigere por até 4 dias; os sabores melhoram com o tempo.',
      'Adicione um pouco de caldo ao reaquecer para restaurar a umidade.'
    ],
    variations: [
      'Básico: Refogado de feijão e arroz sozinho (25g carboidratos, 14g fibra).',
      'Com Abacate: Adicione 1/4 de abacate fatiado (29g carboidratos totais, 17g fibra).',
      'Com Salada Lateral: Adicione uma salada verde mista grande com vinagrete (28g carboidratos totais, 17g fibra).',
      'Com Cobertura: Adicione 2 colheres de sopa de queijo ralado (25g carboidratos totais, 14g fibra, +6g proteína).',
      'Oleaginosas: Adicione 2 colheres de sopa de amêndoas picadas (+3g proteína, +2g fibra).',
      'Queijo: Cubra com 1/4 xícara de queijo ralado (+7g proteína).',
      'Iogurte Grego: Sirva com 2 colheres de sopa de iogurte grego natural (+4g proteína).',
      'Mix de Quinoa: Substitua 1/4 xícara de arroz por quinoa cozida (+2g proteína).',
      'Estilo Mexicano: Adicione jalapeños, suco de limão e coentro.',
      'Mediterrâneo: Adicione azeitonas, tomates secos e manjericão.',
      'Sudoeste: Adicione milho, pimentões e páprica defumada.',
      'Inspirado na Índia: Adicione curry em pó, gengibre e espinafre.'
    ]
  },
  {
    id: 'frango-simples-cogumelos-frigideira',
    title: 'Frango Simples com Cogumelos na Frigideira',
    category: 'dinner',
    prepTime: '19 minutos',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '4 peitos de frango sem osso e sem pele (cerca de 140g cada)',
      '2 colheres de sopa de azeite de oliva, divididas',
      '450g cogumelos Paris, fatiados (cerca de 4 xícaras)',
      '1 cebola média, fatiada (cerca de 1 xícara)',
      '4 dentes de alho, picados (cerca de 1 colher de sopa)',
      '3/4 xícara de caldo de galinha com baixo teor de sódio',
      '1 colher de chá de tomilho seco (ou 1 colher de sopa de fresco)',
      '1/2 colher de chá de sal, dividida',
      '1/2 colher de chá de pimenta-do-reino, dividida',
      '2 colheres de sopa de suco de limão (cerca de 1/2 limão)',
      '2 colheres de sopa de salsinha fresca picada (opcional, para guarnecer)'
    ],
    instructions: [
      'Tempere os peitos de frango com 1/4 colher de chá de sal e 1/4 colher de chá de pimenta-do-reino em ambos os lados.',
      'Aqueça 1 colher de sopa de azeite de oliva em uma frigideira grande em fogo médio-alto.',
      'Adicione o frango à frigideira quente. Cozinhe por 6-7 minutos de cada lado até ficar dourado e cozido por completo (temperatura interna 74°C).',
      'Retire o frango para um prato e cubra com papel alumínio para manter aquecido.',
      'Adicione o azeite de oliva restante à mesma frigideira.',
      'Adicione os cogumelos fatiados e cozinhe por 2-3 minutos até começarem a dourar.',
      'Adicione a cebola fatiada aos cogumelos. Cozinhe por 2-3 minutos até a cebola começar a amolecer.',
      'Adicione o alho e o tomilho, cozinhe por 30 segundos até ficarem perfumados.',
      'Adicione o caldo de galinha, o sal e a pimenta restantes. Cozinhe em fogo brando por 2 minutos até reduzir ligeiramente.',
      'Adicione o suco de limão. Retorne o frango à frigideira brevemente para aquecer.',
      'Guarneça com salsinha, se usar.'
    ],
    tips: [
      'Fatie os cogumelos e as cebolas enquanto o frango cozinha.',
      'Use cogumelos pré-fatiados, se disponíveis.',
      'Mantenha o caldo de galinha de fácil acesso na despensa.'
    ],
    nutrition: {
      calories: 275,
      protein: '34g',
      carbs: '8g',
      fat: '9g'
    },
    mealPrep: [
      'Fatie cogumelos e cebolas com até 2 dias de antecedência.',
      'Tempere o frango com até 24 horas de antecedência.',
      'Prato cozido refrigera por 3 dias, reaqueça delicadamente.',
      'O frango congela bem; os cogumelos são melhores frescos.'
    ],
    variations: [
      'Básico: Frango e cogumelos sozinhos (8g carboidratos, 2g fibra).',
      'Com Vegetais: Adicione 1 xícara de brócolis cozido no vapor (12g carboidratos totais, 6g fibra).',
      'Com Salada: Adicione uma salada verde mista grande com vinagrete (12g carboidratos totais, 5g fibra).',
      'Com Couve-flor: Adicione 1/2 xícara de purê de couve-flor (10g carboidratos totais, 4g fibra).',
      'Cogumelos Mistos: Combine cogumelos Paris, cremini e shiitake.',
      'Com Ervas Aprimoradas: Adicione alecrim fresco ou sálvia com tomilho.',
      'Alho Marcante: Aumente o alho para 6 dentes para mais sabor.',
      'Limão e Ervas: Adicione raspas de limão com suco para um sabor mais brilhante.',
      'Sobrecoxas de Frango: Use sobrecoxas com osso, se preferir (adiciona 5 minutos de cozimento).',
      'Filé Mignon Suíno: Substitua por filé mignon suíno fatiado.',
      'Bife de Peru: Use bifes de peito de peru para variedade.',
      'Opção de Peixe: Adapte com peixe branco firme (reduza o tempo de cozimento para 3-4 min por lado).'
    ]
  },
  {
    id: 'chips-batata-doce',
    title: 'Chips Crocantes de Batata Doce',
    category: 'snack',
    prepTime: '20 minutos',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '2 batatas doces médias (cerca de 450g no total)',
      '1 colher de sopa de azeite de oliva',
      '1/4 colher de chá de canela em pó',
      '1/2 colher de chá de sal',
      '1/8 colher de chá de pimenta-do-reino',
      '1/4 colher de chá de páprica (opcional, para versão salgada)'
    ],
    instructions: [
      'Pré-aqueça o forno a 160°C. Forre uma assadeira grande com papel manteiga ou unte levemente com óleo.',
      'Lave e esfregue bem as batatas doces (deixe a casca para mais fibra e nutrientes).',
      'Usando uma faca afiada ou um mandoline, corte as batatas doces em rodelas bem finas, com cerca de 0,3 cm de espessura.',
      'Coloque as fatias de batata doce em uma tigela grande. Regue com azeite de oliva e misture delicadamente para cobrir todas as fatias uniformemente.',
      'Em uma tigela pequena, misture a canela, o sal e a pimenta-do-reino.',
      'Polvilhe a mistura de temperos sobre as fatias de batata doce untadas e misture novamente para garantir uma cobertura uniforme.',
      'Arrume as fatias de batata doce em uma única camada na assadeira preparada. Não as sobreponha – use duas assadeiras se necessário.',
      'Asse por 15-20 minutos, virando as fatias na metade do tempo (por volta dos 8-10 minutos). Observe cuidadosamente nos minutos finais – os chips devem estar dourados e crocantes nas bordas.',
      'Retire do forno e deixe esfriar na assadeira por 2-3 minutos para atingir a máxima crocância.'
    ],
    tips: [
      'Use um fatiador mandoline para espessura uniforme e rapidez.',
      'Seque as fatias com papel toalha antes de untar com óleo para maior crocância.'
    ],
    nutrition: {
      calories: 75,
      protein: '2g',
      carbs: '15g',
      fat: '4g'
    },
    mealPrep: [
      'Fatie as batatas doces e guarde em água por até 24 horas.',
      'Faça o dobro da receita para cozinhar em lote, armazena bem.',
      'Pré-porcione em pequenos sacos ou recipientes para controle de porções.'
    ],
    variations: [
      'Mistura de Ervas Salgadas: 1/2 colher de chá de alho em pó, 1/4 colher de chá de orégano, 1/4 colher de chá de tomilho, 1/2 colher de chá de sal.',
      'Estilo Cajún Picante: 1/2 colher de chá de páprica, 1/4 colher de chá de pimenta caiena, 1/4 colher de chá de alho em pó, 1/2 colher de chá de sal.',
      'Doce de Canela e Açúcar: 1/2 colher de chá de canela, 1/4 colher de chá de noz-moscada, uma pitada de sal, 1 colher de chá de adoçante granulado.',
      'Básico: Chips crocantes de batata doce com canela e sal.',
      'Com Queijo: Combine com 30g de queijo para proteína adicional (+6g proteína, +1g carboidratos).',
      'Com Oleaginosas: Combine com 1 colher de sopa de oleaginosas para gorduras saudáveis.'
    ]
  },
  {
    id: 'pipoca-temperada-ervas',
    title: 'Pipoca Temperada Saborosa com Ervas',
    category: 'snack',
    prepTime: '8 minutos',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '1/4 xícara de milho para pipoca (cerca de 50g)',
      '1 colher de sopa de azeite de oliva (para estourar a pipoca)',
      '2 colheres de sopa de levedura nutricional',
      '1/2 colher de chá de alho em pó',
      '1/2 colher de chá de sal',
      '1/4 colher de chá de páprica defumada',
      '1/4 colher de chá de cebola em pó (opcional)',
      '1/8 colher de chá de pimenta-do-reino'
    ],
    instructions: [
      'Em uma tigela pequena, pré-misture a levedura nutricional, o alho em pó, o sal, a páprica defumada, a cebola em pó e a pimenta-do-reino. Reserve.',
      'Aqueça o azeite de oliva em uma panela grande e de fundo pesado com tampa que encaixe bem, em fogo médio-alto.',
      'Adicione 3 grãos de milho para testar a temperatura do óleo. Quando eles estourarem, adicione o restante do milho em uma única camada. Cubra a panela e agite suavemente para cobrir os grãos com óleo.',
      'Quando a pipoca começar a estourar (cerca de 30 segundos), agite a panela ocasionalmente. Quando o ritmo diminuir para 2-3 segundos entre os estouros, retire do fogo, mas mantenha a panela coberta por 1 minuto para terminar de estourar.',
      'Retire a tampa (com cuidado, afastando do rosto), polvilhe imediatamente a mistura de temperos sobre a pipoca quente. Misture com uma colher grande ou agite a panela tampada para distribuir uniformemente. Sirva imediatamente.'
    ],
    tips: [
      'Pré-misture os temperos em grande quantidade para várias fornadas.',
      'Use o método do teste de 3 grãos para o tempo perfeito.',
      'Mantenha a panela em movimento suave para evitar que queime.'
    ],
    nutrition: {
      calories: 70,
      protein: '3g',
      carbs: '8g',
      fat: '2g'
    },
    mealPrep: [
      'Misture grandes quantidades de temperos secos em potes de vidro (duram 6 meses).',
      'Meça porções de 1/4 xícara de milho em pequenos recipientes ou sacos.',
      'Prepare a pipoca na hora para melhor textura.'
    ],
    variations: [
      'Estilo Festa Mexicana: Adicione 1/4 colher de chá de pimenta em pó e 1/4 colher de chá de cominho à mistura de temperos base. Inclua uma pitada de raspas de limão e pimenta caiena para picância. Finalize com umas gotas de suco de limão fresco.',
      'Estilo Ervas Italianas: Substitua a páprica por orégano e manjericão secos. Adicione 1/4 colher de chá de alecrim seco (esmagado finamente). Inclua alho em pó extra para um sabor robusto.',
      'Estilo Everything Bagel: Adicione 1/2 colher de chá de gergelim e 1/4 colher de chá de sementes de papoula. Inclua 1/4 colher de chá de cebola desidratada picada e alho desidratado. Use sal marinho grosso em vez de sal comum.',
      'Básico: Pipoca temperada com levedura nutricional, alho e páprica.'
    ]
  },
  {
    id: 'bolinhas-energeticas-amendoim',
    title: 'Bolinhas Energéticas de Amendoim',
    category: 'snack',
    prepTime: '15 minutos + 30 minutos de refrigeração',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '1/2 xícara de manteiga de amendoim natural (sem açúcar adicionado)',
      '1/2 xícara de aveia em flocos (tradicional, crua)',
      '2 colheres de sopa de mel',
      '2 colheres de sopa de farinha de linhaça',
      '1/2 colher de chá de extrato de baunilha',
      '2 colheres de sopa de mini gotas de chocolate amargo',
      'Uma pitada de sal'
    ],
    instructions: [
      'Em uma tigela média, combine a manteiga de amendoim e o mel. Misture com um garfo até ficar bem homogêneo e liso.',
      'Adicione a aveia, a farinha de linhaça, o extrato de baunilha e o sal. Mexa até a mistura formar uma massa coesa que se mantenha unida quando pressionada. Se estiver muito pegajosa, adicione mais aveia, 1 colher de sopa de cada vez.',
      'Incorpore as gotas de chocolate.',
      'Com as mãos limpas, enrole a mistura em 12 bolinhas (cerca de 1 colher de sopa cada). Coloque em um prato forrado com papel manteiga.',
      'Leve à geladeira por 30 minutos ou ao freezer por 15 minutos até ficarem firmes. Guarde tampado na geladeira.'
    ],
    tips: [
      'Meça todos os ingredientes antes de começar.',
      'Use um pegador de sorvete pequeno para bolinhas uniformes.',
      'Faça o dobro da receita para preparo de refeições, já que o tempo ativo é o mesmo.'
    ],
    nutrition: {
      calories: 140,
      protein: '6g',
      carbs: '12g',
      fat: '9g'
    },
    mealPrep: [
      'Faça o dobro da receita e armazene em pote hermético na geladeira.',
      'Bolinhas prontas duram até 1 semana refrigeradas.',
      'Podem ser congeladas por até 2 meses.'
    ],
    variations: [
      'Amantes de Chocolate: Aumente as mini gotas de chocolate para 3 colheres de sopa, adicione 1 colher de sopa de cacau em pó sem açúcar, reduza a aveia para 6 colheres de sopa.',
      'Toque Tropical: Substitua as gotas de chocolate por 2 colheres de sopa de coco ralado sem açúcar, adicione 1 colher de sopa de abacaxi seco picado, inclua 1/4 colher de chá de extrato de coco.',
      'Reforço de Proteína: Adicione 1 colher de sopa de proteína em pó sem sabor, aumente a manteiga de amendoim para 10 colheres de sopa, pode precisar de 1 colher de sopa extra de mel para umidade.',
      'Sem farinha de linhaça: Use sementes de chia (mesma quantidade) ou aveia extra (+1 colher de sopa).',
      'Alergia a amendoim: Substitua por pasta de semente de girassol ou tahini (mesma quantidade).',
      'Sem mini gotas de chocolate: Pique uma barra de chocolate amargo comum em pedacinhos.',
      'Alternativa ao mel: Use xarope de bordo (mesma quantidade) ou banana amassada (2 colheres de sopa).'
    ]
  },
  {
    id: 'palitos-vegetais-cottage-ervas',
    title: 'Palitos de Vegetais Crocantes com Patê de Cottage e Ervas',
    category: 'snack',
    prepTime: '10 minutos',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '1/2 xícara de queijo cottage light (4% de gordura ou menos)',
      '2 cenouras médias, cortadas em palitos (cerca de 1 xícara)',
      '2 talos de salsão (aipo), cortados em palitos (cerca de 1 xícara)',
      '1/2 pimentão (qualquer cor), cortado em tiras',
      '2 colheres de sopa de queijo cheddar light, ralado',
      '1 colher de sopa de cebolinha fresca picada (ou 1 colher de chá de desidratada)',
      '1/4 colher de chá de alho em pó',
      '1/4 colher de chá de sal (ou a gosto)',
      '1/8 colher de chá de pimenta-do-reino',
      '1 colher de chá de suco de limão (opcional, para dar brilho)'
    ],
    instructions: [
      'Lave e prepare os vegetais: corte as cenouras em palitos de 7-10 cm (cerca de 0,5 cm de espessura), corte os talos de salsão em palitos de tamanho semelhante, fatie o pimentão em tiras, pique a cebolinha fresca, se estiver usando.',
      'Em uma tigela média, combine o queijo cottage, o cheddar ralado, o alho em pó, o sal e a pimenta-do-reino. Misture delicadamente com uma colher até ficar bem combinado.',
      'Adicione a cebolinha picada e o suco de limão (se estiver usando). Mexa até distribuir uniformemente.',
      'Arrume os palitos de vegetais em um prato ou em pequenos recipientes.',
      'Sirva o patê em uma tigela pequena para compartilhar ou divida em recipientes individuais. Pode ser servido imediatamente ou refrigerado por até 4 horas.'
    ],
    tips: [
      'Vegetais pré-cortados podem ser armazenados em água na geladeira por até 24 horas.',
      'Misture os ingredientes do patê na noite anterior para um sabor ainda melhor.'
    ],
    nutrition: {
      calories: 80,
      protein: '8g',
      carbs: '10g',
      fat: '3g'
    },
    mealPrep: [
      'Corte os vegetais no domingo para a semana inteira, guarde em água.',
      'Prepare a mistura de queijo cottage com até 3 dias de antecedência.',
      'Monte porções individuais em recipientes.'
    ],
    variations: [
      'Mix de Primavera: Ervilhas-tortas, rabanetes, tomate cereja. Adicione dill fresco ao patê.',
      'Horta de Verão: Palitos de pepino, tomate cereja, pimentão amarelo. Adicione manjericão fresco ao patê.',
      'Colheita de Outono: Palitos de cenoura, salsão, pimentão vermelho. Adicione ervas secas (orégano, tomilho) ao patê.',
      'Conforto de Inverno: Palitos de cenoura, salsão, floretes de brócolis (branqueados por 1 minuto). Adicione alho em pó e cebolinha seca ao patê.',
      'Estilo Mediterrâneo: 1 colher de sopa de azeitonas picadas, 1/4 colher de chá de orégano, uma pitada de raspas de limão.',
      'Estilo Mexicano: 1/4 colher de chá de cominho, 1/4 colher de chá de pimenta em pó, 1 colher de sopa de tomate picado.',
      'Estilo Ranch: 1/2 colher de chá de cebola em pó, 1/4 colher de chá de dill seco, 1/8 colher de chá de páprica.'
    ]
  },
  {
    id: 'parfait-iogurte-grego-frutas-vermelhas',
    title: 'Parfait de Iogurte Grego e Frutas Vermelhas',
    category: 'snack',
    prepTime: '5 minutos',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '1 xícara de iogurte grego natural (2% gordura)',
      '1/2 xícara de frutas vermelhas mistas (frescas ou congeladas, descongeladas)',
      '2 colheres de sopa de aveia em flocos (tradicional, crua)',
      '1 colher de chá de mel',
      '1/4 colher de chá de canela em pó',
      '1/4 colher de chá de extrato de baunilha (opcional)'
    ],
    instructions: [
      'Em uma tigela pequena, misture o iogurte grego com o mel, a canela e o extrato de baunilha (se estiver usando). Mexa até ficar bem combinado e homogêneo.',
      'Se usar frutas vermelhas congeladas, descongele-as rapidamente colocando-as em uma tigela pequena e aquecendo no micro-ondas por 30 segundos, depois deixe esfriar um pouco. Se usar frutas frescas, apenas lave e seque.',
      'Monte em dois copos ou tigelas pequenas: camada inferior com 2 colheres de sopa da mistura de iogurte, camada do meio com 1 colher de sopa de aveia e 2 colheres de sopa de frutas vermelhas, camada superior com o restante da mistura de iogurte, finalize com o restante das frutas vermelhas e uma pitada de canela.',
      'Sirva imediatamente ou refrigere por até 2 horas se for preparar com antecedência.'
    ],
    tips: [
      'Pré-misture a base de iogurte na noite anterior.',
      'Use frutas vermelhas congeladas pré-descongeladas.',
      'Faça as camadas diretamente em potes de vidro portáteis para facilitar o transporte.'
    ],
    nutrition: {
      calories: 110,
      protein: '12g',
      carbs: '14g',
      fat: '3g'
    },
    mealPrep: [
      'Misture e guarde a base de iogurte coberta por até 3 dias.',
      'Lave e porcione as frutas frescas, guarde por 2-3 dias.',
      'Pré-meça a aveia em pequenos recipientes.'
    ],
    variations: [
      'Mix de Primavera: Morangos frescos + framboesas, adicione hortelã fresca.',
      'Abundância de Verão: Mirtilos + amoras + morangos, adicione raspas de limão à base de iogurte.',
      'Opção de Outono: Mix de frutas vermelhas congeladas + maçã picada, canela extra e noz-moscada.',
      'Versão Econômica: Frutas vermelhas congeladas em promoção, use iogurte natural comum + baunilha.',
      'Parfait Elegante: Monte em copos transparentes, finalize com fruta fresca e hortelã.',
      'Mason Jar Portátil: Monte em potes de vidro de 240ml com tampa hermética.',
      'Estilo Tigela Casual: Sirva em tigelas de cereal, mexa para apresentação menos formal.'
    ]
  },
  {
    id: 'fatias-maca-amendoim',
    title: 'Fatias Crocantes de Maçã com Amendoim',
    category: 'snack',
    prepTime: '5 minutos',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '1 maçã média (qualquer variedade - Gala, Fuji, ou Granny Smith)',
      '2 colheres de sopa de manteiga de amendoim natural (sem açúcar adicionado)',
      '1/4 colher de chá de canela em pó',
      '1 colher de sopa de amendoim picado (sem sal)',
      '1 colher de chá de suco de limão (opcional, evita escurecimento)'
    ],
    instructions: [
      'Lave bem a maçã. Retire o miolo e corte em 8-10 rodelas, com cerca de 0,5 cm de espessura. Deixe a casca para fibra e nutrientes extras.',
      'Se for usar suco de limão, pincele levemente as fatias de maçã para evitar que escureçam (passo opcional para consumo imediato).',
      'Espalhe cerca de 1 colher de chá de manteiga de amendoim em cada fatia de maçã usando uma faca de manteiga.',
      'Polvilhe cada fatia com uma pitada de canela e amendoim picado.',
      'Arrume em um prato e sirva imediatamente, ou refrigere por até 2 horas se for preparar com antecedência.'
    ],
    tips: [
      'Pré-fatie as maçãs pela manhã e guarde em água com limão. Seque bem antes de montar.',
      'A manteiga de amendoim espalha mais facilmente em temperatura ambiente.'
    ],
    nutrition: {
      calories: 140,
      protein: '8g',
      carbs: '12g',
      fat: '8g'
    },
    mealPrep: [
      'Fatie as maçãs e guarde em água com limão por até 24 horas.',
      'Pré-porcione a manteiga de amendoim em pequenos recipientes.',
      'Monte em pequenos recipientes para lanches no trabalho/escola.'
    ],
    variations: [
      'Outono/Inverno: Maçã Fuji ou Gala, adicione noz-moscada ou tempero de torta de maçã, use nozes picadas.',
      'Primavera/Verão: Maçã Granny Smith, adicione folhas de hortelã frescas, use manteiga de amendoim em pó.',
      'Versão Econômica: Use maçãs em promoção, manteiga de amendoim genérica, pule os amendoins picados.',
      'Reforço de Proteína: Use 3 colheres de sopa de manteiga de amendoim, adicione proteína em pó, sirva com iogurte grego.'
    ]
  },
  {
    id: 'torrada-abacate-ovo-cozido',
    title: 'Clássica Torrada de Abacate com Ovo Cozido',
    category: 'snack',
    prepTime: '12 minutos (com ovos pré-cozidos)',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '1 fatia de pão integral, cortada na diagonal (em dois triângulos)',
      '2 ovos grandes, cozidos (preparados com antecedência)',
      '1/2 abacate pequeno, maduro',
      '1 colher de chá de suco de limão (fresco ou engarrafado)',
      '1/4 colher de chá de sal',
      '1/4 colher de chá de pimenta-do-reino',
      '4 tomates cereja pequenos, cortados ao meio (opcional)',
      'Uma pitada de alho em pó (opcional)'
    ],
    instructions: [
      'Toste a fatia de pão até ficar dourada. Enquanto o pão tosta, descasque os ovos cozidos e corte cada um em 4 rodelas. Reserve.',
      'Corte o abacate ao meio, remova o caroço e retire a polpa para uma tigela pequena. Amasse com um garfo até ficar cremoso, mas ainda com alguns pedaços (cerca de 1 minuto).',
      'Adicione o suco de limão, sal, pimenta-do-reino e alho em pó. Misture bem.',
      'Corte o pão tostado na diagonal para fazer 2 pedaços triangulares. Espalhe a mistura de abacate uniformemente em cada triângulo.',
      'Cubra cada um com 4 rodelas de ovo e 2 metades de tomate cereja. Tempere levemente com sal e pimenta adicionais, se desejar.'
    ],
    tips: [
      'Cozinhe os ovos em lotes no domingo (guarde por até 1 semana).',
      'Pré-amasse a mistura de abacate com até 4 horas de antecedência, cubra com plástico filme diretamente na superfície para evitar que escureça.'
    ],
    nutrition: {
      calories: 160,
      protein: '10g',
      carbs: '13g',
      fat: '8g'
    },
    mealPrep: [
      'Cozinhe 6-8 ovos de uma vez, guarde descascados na geladeira por até 1 semana.',
      'Amasse 2-3 abacates com suco de limão, guarde em recipientes herméticos por 2-3 dias.',
      'Mantenha o pão integral congelado, toste diretamente do congelador.'
    ],
    variations: [
      'Estilo Mediterrâneo: Adicione 1 colher de chá de dill fresco ou orégano seco à mistura de abacate. Cubra com 2 tomates cereja + 1 colher de chá de queijo feta esfarelado.',
      'Estilo Mexicano: Adicione uma pitada de cominho e suco de limão em vez de limão. Cubra com jalapeño picado e coentro fresco.',
      'Estilo Fresco da Horta: Adicione fatias finas de pepino e ervas frescas (salsinha, cebolinha). Use tempero "everything bagel" em vez de sal/pimenta.'
    ]
  },
  {
    id: 'tigela-cottage-vegetais-frescos',
    title: 'Tigela de Cottage com Vegetais Frescos',
    category: 'snack',
    prepTime: '8 minutos',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    ingredients: [
      '1 xícara de queijo cottage light (4% de gordura ou menos)',
      '1/2 pepino médio, picado em cubos (cerca de 1/2 xícara)',
      '1/2 xícara de tomate cereja, cortado ao meio',
      '1 colher de sopa de cebolinha fresca picada (ou 1 colher de chá de desidratada)',
      '1/4 colher de chá de alho em pó',
      '1/4 colher de chá de sal (ou a gosto)',
      '1/8 colher de chá de pimenta-do-reino',
      '1 colher de chá de suco de limão (opcional, para dar brilho)'
    ],
    instructions: [
      'Lave e pique o pepino em cubos pequenos (cerca de 0,5 cm). Corte os tomates cereja ao meio. Se usar cebolinha fresca, pique finamente.',
      'Em uma tigela média, combine o queijo cottage, o alho em pó, o sal e a pimenta-do-reino. Misture delicadamente com uma colher.',
      'Adicione o pepino picado e os tomates cortados ao meio à mistura de queijo cottage. Polvilhe com a cebolinha picada e o suco de limão, se usar. Misture delicadamente para combinar.',
      'Divida entre duas tigelas pequenas ou copos para servir. Sirva imediatamente ou refrigere por até 4 horas.'
    ],
    tips: [
      'Pique os vegetais na noite anterior e guarde separadamente.',
      'O queijo cottage mistura mais facilmente se estiver em temperatura ambiente por 10 minutos.'
    ],
    nutrition: {
      calories: 90,
      protein: '14g',
      carbs: '8g',
      fat: '2g'
    },
    mealPrep: [
      'Pique os vegetais no domingo para a semana inteira.',
      'Pré-porcione o queijo cottage em recipientes individuais.',
      'Guarde os vegetais e o queijo cottage separadamente, junte quando for comer.'
    ],
    variations: [
      'Primavera: Adicione rabanetes picados e ervilhas frescas, endro ou salsinha fresca.',
      'Verão: Adicione pimentões picados e manjericão fresco, tomates uva cortados ao meio.',
      'Outono: Adicione pimentão vermelho picado e salsão, tomilho ou orégano fresco.',
      'Inverno: Adicione cenouras finamente picadas e cebolinha, ervas secas.',
      'Estilo Mediterrâneo: 1 colher de sopa de azeitonas picadas, 1/4 colher de chá de orégano, raspas de limão.',
      'Estilo Mexicano: 1 colher de sopa de pimentão picado, 1/4 colher de chá de cominho, pimenta em pó.',
      'Estilo Fresco da Horta: 1 colher de sopa de salsão picado, salsinha fresca, mais suco de limão.',
      'Reforço de Proteína: Use 1 1/4 xícaras de queijo cottage, adicione 1 colher de sopa de sementes de girassol.'
    ]
  },
  {
    id: 'biscoitos-integrais-queijo-maca',
    title: 'Biscoitos Integrais com Queijo e Maçã',
    category: 'snack',
    prepTime: '3 minutos',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
    ingredients: [
      '6 biscoitos integrais pequenos (cerca de 30g no total)',
      '2 fatias de queijo light (mussarela ou prato light)',
      '1/2 maçã média, fatiada finamente (qualquer variedade)',
      '1 pitada de canela em pó',
      '6 fatias finas de pepino para crocância extra (opcional)'
    ],
    instructions: [
      'Arrume 6 biscoitos em um prato de servir. Retire as fatias de queijo da geladeira para amolecerem ligeiramente.',
      'Lave a maçã e corte em 12 fatias finas (deixe a casca para mais fibra). Evite as sementes centrais.',
      'Coloque 1/2 fatia de queijo em cada biscoito. Cubra cada um com 2 fatias de maçã em padrão sobreposto.',
      'Polvilhe levemente com canela e sirva imediatamente.'
    ],
    tips: [
      'Pré-fatie as maçãs com até 2 horas de antecedência e guarde na geladeira.',
      'Mantenha os biscoitos em recipientes com porções controladas.',
      'Perfeito para lanche no meio da tarde quando a energia naturalmente diminui.'
    ],
    nutrition: {
      calories: 130,
      protein: '8g',
      carbs: '15g',
      fat: '4g'
    },
    mealPrep: [
      'Porcione os biscoitos em pequenos recipientes ou sacos (6 biscoitos cada).',
      'Pré-fatie o queijo ao meio, guarde na geladeira por até 5 dias.',
      'Fatie as maçãs apenas no dia do consumo para manter a crocância.',
      'Para levar: embale biscoitos e queijo separadamente, leve a maçã inteira e fatie na hora.'
    ],
    variations: [
      'Estilo Colheita de Outono: Use maçãs Honeycrisp ou Gala, adicione pitada de noz-moscada com canela.',
      'Estilo Fresco de Verão: Adicione fatias finas de pepino, use maçãs Fuji ou Pink Lady, polvilhe com ervas secas.',
      'Versão com Reforço de Proteína: Use cheddar forte com baixo teor de gordura, adicione 1 fatia fina de peito de peru em 3 biscoitos.',
      'Opção com Baixo Teor de Carboidratos: Use rodelas de pepino no lugar dos biscoitos, tempere com "everything bagel".',
      'Estilo Multigrãos: Substitua por biscoitos multigrãos quando disponíveis.'
    ]
  },
  {
    id: 'macas-assadas-microondas-canela-nozes',
    title: 'Maçãs Assadas no Micro-ondas com Canela e Nozes',
    category: 'dessert',
    prepTime: '12 minutos',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop',
    ingredients: [
      '4 maçãs médias (Gala, Fuji, ou Honeycrisp)',
      '1/4 xícara de nozes picadas',
      '1 colher de chá de canela em pó',
      '2 colheres de sopa de mel',
      '1 colher de sopa de manteiga derretida',
      '1/2 colher de chá de extrato de baunilha (opcional)',
      '1 pitada de sal para realçar os sabores',
      '2 colheres de sopa de água para cozinhar'
    ],
    instructions: [
      'Lave as maçãs e use um descaroçador ou faca para remover os miolos, deixando os últimos 1,5 cm da base intactos para criar um "poço".',
      'Em uma tigela pequena, misture as nozes picadas, canela, mel, manteiga derretida, baunilha (se usar) e sal até ficarem bem combinados.',
      'Coloque as maçãs em um recipiente seguro para micro-ondas. Recheie cada cavidade com a mistura de nozes, dividindo uniformemente. Adicione água ao fundo do recipiente.',
      'Cubra com prato ou tampa própria para micro-ondas. Cozinhe em potência alta por 6-8 minutos, até ficarem macias quando perfuradas com garfo. Deixe esfriar por 2 minutos antes de servir.'
    ],
    tips: [
      'Use nozes pré-picadas para economizar tempo.',
      'Derreta a manteiga no micro-ondas enquanto prepara as maçãs.',
      'Escolha maçãs de tamanho semelhante para cozimento uniforme.',
      'Perfeito como sobremesa noturna, 2-3 horas após o jantar.'
    ],
    nutrition: {
      calories: 115,
      protein: '2g',
      carbs: '18g',
      fat: '5g'
    },
    mealPrep: [
      'Descaroce as maçãs e prepare o recheio com até 4 horas de antecedência.',
      'Cubra as maçãs descaroçadas com água e limão para evitar escurecimento.',
      'As maçãs cozidas reaquecem bem no micro-ondas (30-45 segundos).',
      'Faça extra para café da manhã ou lanches do dia seguinte.'
    ],
    variations: [
      'Especiarias de Outono: Adicione pitada de noz-moscada, cravo-da-índia e gengibre.',
      'Calor de Inverno: Adicione raspas de laranja e 2 colheres de sopa de cranberries.',
      'Frescor de Primavera: Adicione raspas de limão e hortelã fresca picada.',
      'Leveza de Verão: Reduza mel para 1 colher de sopa, sirva com frutas vermelhas.',
      'Com Iogurte: Sirva com 2 colheres de sopa de iogurte grego (+4g proteína).',
      'Nozes Pecan: Estilo sulista com essência de bordo.',
      'Amêndoas: Estilo californiano with extrato de amêndoa.',
      'Mix Econômico: Use oleaginosas em promoção ou manteiga de amendoim em pó.'
    ]
  },
  {
    id: 'parfait-rapido-iogurte-grego-frutas-vermelhas',
    title: 'Parfait Rápido de Iogurte Grego e Frutas Vermelhas',
    category: 'dessert',
    prepTime: '5 minutos',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
    ingredients: [
      '1 xícara de iogurte grego natural (2% de gordura)',
      '3/4 xícara de frutas vermelhas mistas (mirtilos, morangos, framboesas)',
      '2 colheres de sopa de amêndoas picadas',
      '1 colher de sopa de mel',
      '1/4 colher de chá de extrato de baunilha',
      '1/4 colher de chá de canela em pó (opcional)'
    ],
    instructions: [
      'Em uma tigela pequena, misture o iogurte grego, o mel e o extrato de baunilha até ficar homogêneo e bem combinado.',
      'Se usar frutas vermelhas congeladas, certifique-se de que estão descongeladas e escorridas. Se usar morangos frescos, corte em pedaços do tamanho de uma mordida.',
      'Em 2 copos ou tigelas pequenas, crie camadas: Comece com 2 colheres de sopa da mistura de iogurte, adicione 2 colheres de sopa de frutas vermelhas, polvilhe com 1/2 colher de sopa de amêndoas.',
      'Repita as camadas e finalize com um último polvilhado de canela, se usar. Sirva imediatamente.'
    ],
    tips: [
      'Use nozes pré-picadas para economizar tempo.',
      'Mantenha o mel em temperatura ambiente para facilitar a mistura.',
      'Use mirtilos que não precisam ser cortados para preparo mais rápido.',
      'Pode ser feito pouco antes de servir ou até 2 horas antes.'
    ],
    nutrition: {
      calories: 140,
      protein: '12g',
      carbs: '15g',
      fat: '4g'
    },
    mealPrep: [
      'Misture a base de iogurte com até 24 horas de antecedência.',
      'Pode ser montado até 2 horas antes de servir.',
      'Dura bem coberto na geladeira.',
      'Dobre a receita para várias porções de uma vez.'
    ],
    variations: [
      'Versão Tropical: Substitua frutas vermelhas por manga e abacaxi picados.',
      'Proteína Extra: Use 1 1/4 xícaras de iogurte (+4g proteína).',
      'Com Biscoitos: Sirva com 2 biscoitos integrais para fibra extra.',
      'Primavera: Use morangos e mirtilos frescos.',
      'Verão: Mix completo de morangos, mirtilos, framboesas e amoras.',
      'Outono: Cranberries frescas com maçãs em quantidade mínima.',
      'Inverno: Mix de frutas vermelhas congeladas (descongeladas).',
      'Nozes: Use nozes para ômega-3 saudáveis para o coração.',
      'Sementes: Substitua por sementes de abóbora ou girassol para opção econômica.'
    ]
  },
  {
    id: 'bolinhas-energeticas-chocolate-aveia',
    title: 'Bolinhas Energéticas de Chocolate e Aveia',
    category: 'dessert',
    prepTime: '10 minutos',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    ingredients: [
      '1 xícara de aveia em flocos (para ser moída)',
      '8 tâmaras Medjool grandes sem caroço (cerca de 3/4 xícara compactada)',
      '3 colheres de sopa de manteiga de amendoim natural',
      '2 colheres de sopa de cacau em pó sem açúcar',
      '1/2 colher de chá de extrato de baunilha',
      '2 colheres de sopa de mini gotas de chocolate amargo',
      '1 pitada de sal para realçar os sabores',
      '1-2 colheres de sopa de água (se necessário)'
    ],
    instructions: [
      'Em um processador de alimentos, pulse a aveia até formar uma consistência de farinha grossa. Não processe demais até virar pó.',
      'Adicione as tâmaras sem caroço e pulse até ficarem picadas e a mistura começar a grudar, cerca de 1-2 minutos.',
      'Adicione a manteiga de amendoim, cacau em pó, baunilha e sal. Processe até formar uma massa que se mantenha unida quando apertada. Se estiver seca, adicione água gradualmente.',
      'Transfira para uma tigela, adicione as gotas de chocolate. Com as mãos, enrole em 12 bolinhas pequenas (1 colher de sopa cada). Leve para gelar por 5 minutos ou sirva imediatamente.'
    ],
    tips: [
      'Use processador com lâminas afiadas para melhores resultados.',
      'Se as tâmaras estiverem duras, deixe de molho em água morna por 5 minutos.',
      'Enrole entre as palmas das mãos para bolinhas lisas.',
      'Perfeito para lanche da tarde ou guloseima após o jantar.'
    ],
    nutrition: {
      calories: 110,
      protein: '4g',
      carbs: '15g',
      fat: '5g'
    },
    mealPrep: [
      'Dobre a receita para suprimento de 2 semanas.',
      'Refrigere em recipiente hermético por até 1 semana.',
      'Congele as bolinhas individualmente por até 1 mês.',
      'Excelente opção de presente saudável.'
    ],
    variations: [
      'Chocolate com Coco: Adicione 1 colher de sopa de coco ralado sem açúcar.',
      'Chocolate com Laranja: Adicione 1/2 colher de chá de raspas de laranja.',
      'Chocolate Espresso: Adicione 1/2 colher de chá de café solúvel em pó.',
      'Chocolate Temperado: Adicione pitada de canela e pimenta caiena.',
      'Com Leite: Sirva com 1/4 xícara de leite de amêndoa sem açúcar.',
      'Reforço de Proteína: Adicione 1 colher de sopa de farinha de linhaça (+1g proteína).',
      'Manteiga de Amêndoa: Sabor mais suave, maior vitamina E.',
      'Manteiga de Girassol: Opção sem castanhas, econômica.',
      'Chocolate Extra: Use 3 colheres de sopa de gotas de chocolate.'
    ]
  },
];

export const getRecipesByCategory = (category: string) => {
  return recipes.filter(recipe => recipe.category === category);
};

export const getRecipeById = (id: string) => {
  return recipes.find(recipe => recipe.id === id);
};

export const categories = [
  {
    name: 'Café-da-Manhã',
    path: '/breakfast',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop',
    description: 'Start your day right'
  },
  {
    name: 'Almoço',
    path: '/lunch', 
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    description: 'Nutritious midday meals'
  },
  {
    name: 'Lanche',
    path: '/snack',
    image: 'https://images.unsplash.com/photo-1587080422634-48baaa49b33a?w=400&h=300&fit=crop',
    description: 'Healthy bites anytime'
  },
  {
    name: 'Janta',
    path: '/dinner',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop',
    description: 'Satisfying evening meals'
  },
  {
    name: 'Sobremesa',
    path: '/dessert',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
    description: 'Sweet treats to indulge'
  }
];
