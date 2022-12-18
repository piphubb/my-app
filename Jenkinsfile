pipeline {
    agent any

    stages {
        stage('Build Dockerfile and Push to Docker hub') {
            steps {
                //sh 'docker build -t vuejs-img .'
                //Install Plugin: Docker Pipeline
                script{
                    docker.withRegistry('', '5e512037-a293-4a1c-b325-b85bf19507e3'){
                        docker.build("piphubb/reactjs-v3").push("${BUILD_NUMBER}")
                    }
                }
                sh 'docker logout'
            }
        }
        stage("Deploy Kubernetes Services"){
           steps{
            sshagent(['ssh-piphub-je']) {
            sh 'scp -o StrictHostKeyChecking=no reactjs.sh phub@34.143.222.243:/home/phub/k8s-files/reactjs.sh'
            sh "ssh -o StrictHostKeyChecking=no phub@34.143.222.243 bash /home/phub/k8s-files/reactjs.sh ${env.BUILD_NUMBER}"
            }
           }
        }
    }
}