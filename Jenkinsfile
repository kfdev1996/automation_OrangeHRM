pipeline {
    agent any
    tools {
    }
    stages {
        stage('Clonar projeto') {
            steps {
                git branch: 'main', url: 'https://github.com/kfdev1996/automation_OrangeHRM.git'
            }
        }
        stage('Instalar dependências') {
            steps {
                sh 'npm install'
                sh 'npm install cypress --save-dev'
            }
        }
        stage('Preparar Cypress') {
            steps {
                sh 'chmod +x ./node_modules/.bin/cypress'
                sh 'npx cypress cache clear'
                sh 'npx cypress install'
            }
        }
        stage('Executar testes Cypress') {
            steps {
                sh '''
                    if ! command -v Xvfb > /dev/null; then
                        echo "Xvfb não está instalado. Instale-o com 'sudo apt-get install xvfb'."
                        exit 1
                    fi
                    xvfb-run --auto-servernum npx cypress run
                '''
            }
        }
    }
    post {
        always {
            echo 'Pipeline concluído.'
        }
        failure {
            echo 'O pipeline falhou. Verifique os logs para mais detalhes.'
        }
    }
}