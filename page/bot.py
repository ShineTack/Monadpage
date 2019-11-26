import telebot

bot = telebot.TeleBot('1026994348:AAGtPxFtXein9bl2UvJhkl62xbo2pKFIzy4')

@bot.message_handler(commands=['start'])
def start(message):
    print(message.chat.id)
    bot.send_message(message.chat.id, "Hi")

def repeat(name, phone, email, telegram=""):
    text = f"""
ФИО : {name}
Телефон : {phone} 
Email : {email}
Telegram : {telegram} 
    """
    bot.send_message('-1001385429241', text)

    bot.polling()