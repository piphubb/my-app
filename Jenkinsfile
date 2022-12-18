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
            sshagent(['ssh-piphub-kub']) {
            sh 'scp -o StrictHostKeyChecking=no reactjs.sh phub@35.240.211.187:/home/phub/k8s-files/reactjs.sh'
            sh "ssh -o StrictHostKeyChecking=no phub@35.240.211.187 bash /home/phub/k8s-files/reactjs.sh ${env.BUILD_NUMBER}"   
            }
           }
        }
    }
}