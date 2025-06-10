pipeline {
    agent any
    tools {
        nodejs 'Node 22.13.1' 
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
                sh 'npx cypress cache clear'
                sh 'npx cypress install'
                sh 'chmod +x ./node_modules/.bin/cypress'
            }
        }
        stage('Executar testes Cypress') {
            steps {
                sh '''
                    if ! command -v Xvfb &> /dev/null; then
                        echo "Xvfb não está instalado. Instale-o com 'sudo apt-get install xvfb'."
                        exit 1
                    fi
                    Xvfb :99 -screen 0 1280x720x24 &
                    sleep 2
                    DISPLAY=:99 npx cypress run
                '''
            }
        }
    }
}