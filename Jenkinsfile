pipeline {
    agent any

    tools {
        nodejs 'NodeJS' 
    }

    stages {
        stage('Clonar projeto') {
            steps {
                git branch: 'main',
                    url: 'git@github.com:kfdev1996/automation_OrangeHRM.git',
                    credentialsId: 'GitHub SSH Key'
            }
        }

        stage('Instalar dependências') {
            steps {
                sh 'npm install'
            }
        }

        stage('Executar testes Cypress') {
            steps {
                sh './node_modules/.bin/cypress run'
            }
        }
    }

    post {
        always {
            junit 'cypress/results/*.xml' 
            cleanWs()
        }
        success {
            echo 'Testes concluídos com sucesso!'
        }
        failure {
            echo 'Testes falharam!'
        }
    }
}
