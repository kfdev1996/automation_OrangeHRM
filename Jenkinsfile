
pipeline {
    agent any

    tools {
        nodejs 'NodeJS' 
    }

    stages {
        stage('Clonar projeto') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/kfdev1996/automation_OrangeHRM.git',
                    credentialsId: 'GitHub SSH Key'
            }
        }

        stage('Instalar dependências') {
            steps {
                sh 'npm install'
                sh 'npx cypress cache clear' 
            }
        }

        stage('Executar testes Cypress') {
            steps {
                sh 'npx cypress run' 
            }
        }
    }

    post {
        always {
            junit 'cypress/results/*.xml' 
            archiveArtifacts artifacts: 'cypress/logs/**, cypress/results/**', allowEmptyArchive: true 
            cleanWs() 
        }
        success {
            echo 'Testes concluídos com sucesso!'
        }
        failure {
            echo 'Testes falharam! Verifique os logs arquivados.'
        }
    }
}