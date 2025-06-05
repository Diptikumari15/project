from flask import Flask, request

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def handle_form():
    name = request.form.get('name')
    email = request.form.get('email')
    return f"Received: Name = {name}, Email = {email}"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
