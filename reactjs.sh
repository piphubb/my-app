cat << EOF > /home/phub/k8s-files/reactjs.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
    name: reactjs-deploy
spec:
    replicas: 2
    selector:
        matchLabels:
            app: reactjs-app
    template:
        metadata:
            labels:
               app: reactjs-app 
        spec:
            containers:
                - name: reactjs-v3-cont
                  image: piphubb/reactjs-v3:$1
                  ports:
                    - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
    name: reactjs-svc
spec:
    type: NodePort
    selector:
        app: reactjs-app
    ports:
        - port: 80
          targetPort: 80
          nodePort: 30044
EOF
kubectl apply -f /home/phub/k8s-files/reactjs.yaml