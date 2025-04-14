import os
import logging
from flask import Flask, render_template, request, flash, redirect, url_for

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Create the Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "default-secret-key-for-development")

# Routes
@app.route('/')
def index():
    return render_template('index.html', active_page='home')

@app.route('/products')
def products():
    return render_template('products.html', active_page='products')

@app.route('/about')
def about():
    return render_template('about.html', active_page='about')

@app.route('/team')
def team():
    return render_template('team.html', active_page='team')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')
        
        # Validate form data
        if not all([name, email, subject, message]):
            flash('Please fill out all fields', 'danger')
        else:
            # In a real application, you would send this data to an email service 
            # or save it to a database
            flash('Thank you for your message! We will get back to you soon.', 'success')
            return redirect(url_for('contact'))
    
    return render_template('contact.html', active_page='contact')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
