Task Automation with ClickUp API
Este projeto implementa uma automação personalizada para gerenciar e atualizar tarefas no ClickUp de forma eficiente. Ele utiliza a API do ClickUp para identificar tarefas criadas recentemente, calcular a próxima data (como o próximo domingo) e atualizar automaticamente os títulos das tarefas em múltiplas listas.

Funcionalidades
Calcula automaticamente a próxima data 
Atualiza os títulos de tarefas criadas nas últimas 24 horas em várias listas do ClickUp.
Otimiza a gestão de tarefas semanais recorrentes.
Reduz a intervenção manual, permitindo que a equipe foque em atividades estratégicas.

Como funciona?
Conecta-se à API do ClickUp usando uma chave de autenticação.
Identifica todas as tarefas criadas nas últimas 24 horas em listas específicas.
Atualiza os títulos das tarefas
Gerencia múltiplas listas de forma simultânea.

Tecnologias Utilizadas
Node.js: Linguagem e runtime.
Axios: Para requisições HTTP à API do ClickUp.
Dotenv: Gerenciamento de variáveis de ambiente.

Como Usar
Pré-requisitos
Tenha o Node.js instalado.
Obtenha uma chave de API do ClickUp (disponível em ClickUp API Docs).

Benefícios
Eficiência Operacional: Reduz trabalho manual ao mínimo.
Confiabilidade: Elimina erros humanos na atualização de títulos.
Escalabilidade: Fácil de expandir para outras listas e fluxos de trabalho.
Possibilidades Futuras
Adicionar suporte para listas que usam datas de outros dias da semana.
Expandir para gerenciar mais elementos das tarefas, como subtarefas ou prazos.
Integração com outras ferramentas via APIs.
