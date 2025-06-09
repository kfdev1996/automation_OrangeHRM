pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
               
                checkout scm
            }
        }
        
        stage('Install dependencies') {
            steps {
              
                sh 'npm ci'
            }
        }
        
        stage('Run Cypress tests') {
            steps {
                
                sh 'npx cypress run'
            }
        }
    }
    
    post {
        always {
            
            junit 'cypress/results/*.xml' 
        }
        failure {
           
            echo 'Os testes falharam, rever o código !'
        }
    }
}