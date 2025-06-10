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
                
                sh 'chmod +x ./node_modules/.bin/cypress'
                
                sh 'npx cypress cache clear'
                
                sh 'npx cypress install'
            }
        }

        stage('Executar testes Cypress') {
            steps {
                sh '''
                    export TERM=xterm
                    echo "Verificando navegadores disponíveis:"
                    npx cypress info

                    echo "Iniciando testes com Chrome em modo headless..."
                    xvfb-run --server-args="-screen 0 1280x1024x24" \
                    npx cypress run --browser chrome --headless --config video=true,chromeWebSecurity=false,viewportWidth=1280,viewportHeight=720
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
