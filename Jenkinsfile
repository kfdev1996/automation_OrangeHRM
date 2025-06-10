pipeline {
    agent any
    tools {
        nodejs 'Node 22.13.1'
    }
    environment {
        CHROME_BIN = '/usr/bin/google-chrome' 
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
        stage('Instalar dependências do sistema') {
            steps {
                sh 'sudo apt-get update || true'
                sh 'sudo apt-get install -y xvfb libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth x11-apps google-chrome-stable || true'
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
                    export TERM=xterm
                    echo "Iniciando testes com Chrome em modo headless..."
                    xvfb-run --server-args="-screen 0 1280x1024x24" \
                        npx cypress run --browser chrome --headless \
                        --config video=true,chromeWebSecurity=false
                '''
            }
        }
    }
    post {
        always {
            echo 'Pipeline concluído.'
            archiveArtifacts artifacts: 'cypress/screenshots/**/*.png, cypress/videos/**/*.mp4, cypress/results/**/*.xml', allowEmptyArchive: true
        }
        failure {
            echo 'O pipeline falhou. Verifique os logs para mais detalhes.'
        }
    }
}
