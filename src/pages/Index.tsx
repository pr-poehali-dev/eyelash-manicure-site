import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-beige-light">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-gold to-gold-dark rounded-md flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <h1
                className="text-2xl font-bold text-gray-900"
                style={{ fontFamily: "Cormorant" }}
              >
                Beauty Salon
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-gold transition-colors"
              >
                Услуги
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-gold transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gold transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-gold hover:bg-gold-dark text-white rounded-none px-8 py-2">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-beige-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Cormorant" }}
          >
            Красота в каждой детали
          </h2>
          <p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "Open Sans" }}
          >
            Профессиональные услуги по наращиванию ресниц и маникюру. Создаем
            неповторимый образ с заботой о вашей красоте.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gold hover:bg-gold-dark text-white rounded-none px-12 py-4 text-lg">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на услугу
            </Button>
            <Button
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-white rounded-none px-12 py-4 text-lg"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Cormorant" }}
            >
              Наши услуги
            </h2>
            <p
              className="text-lg text-gray-600"
              style={{ fontFamily: "Open Sans" }}
            >
              Профессиональный уход за вашей красотой
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Eyelashes Service */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-gold to-gold-dark rounded-md mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Eye" size={32} className="text-white" />
                </div>
                <CardTitle
                  className="text-2xl font-bold text-gray-900"
                  style={{ fontFamily: "Cormorant" }}
                >
                  Ресницы
                </CardTitle>
                <CardDescription
                  className="text-gray-600"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Наращивание и оформление ресниц
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      Классическое наращивание
                    </span>
                    <span className="text-gold font-semibold">от 2000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      Объемное наращивание 2D-3D
                    </span>
                    <span className="text-gold font-semibold">от 2500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Голливудский объем</span>
                    <span className="text-gold font-semibold">от 3500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Коррекция</span>
                    <span className="text-gold font-semibold">от 1500 ₽</span>
                  </div>
                </div>
                <Button className="w-full bg-gold hover:bg-gold-dark text-white rounded-none py-3 mt-6">
                  Записаться на ресницы
                </Button>
              </CardContent>
            </Card>

            {/* Manicure Service */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-gold to-gold-dark rounded-md mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Hand" size={32} className="text-white" />
                </div>
                <CardTitle
                  className="text-2xl font-bold text-gray-900"
                  style={{ fontFamily: "Cormorant" }}
                >
                  Маникюр
                </CardTitle>
                <CardDescription
                  className="text-gray-600"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Профессиональный уход за ногтями
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Классический маникюр</span>
                    <span className="text-gold font-semibold">от 1200 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Аппаратный маникюр</span>
                    <span className="text-gold font-semibold">от 1500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Покрытие гель-лак</span>
                    <span className="text-gold font-semibold">от 800 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Дизайн ногтей</span>
                    <span className="text-gold font-semibold">от 300 ₽</span>
                  </div>
                </div>
                <Button className="w-full bg-gold hover:bg-gold-dark text-white rounded-none py-3 mt-6">
                  Записаться на маникюр
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Cormorant" }}
            >
              Портфолио наших работ
            </h2>
            <p
              className="text-lg text-gray-600"
              style={{ fontFamily: "Open Sans" }}
            >
              Примеры наших лучших работ
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Eyelash Works */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                <img
                  src="/img/02ec8fda-9e98-49a7-82cf-17f699158cbc.jpg"
                  alt="Наращивание ресниц работа 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ fontFamily: "Cormorant" }}
              >
                Наращивание ресниц
              </h3>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: "Open Sans" }}
              >
                Объемное наращивание 2D
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                <img
                  src="/img/35a4cbb6-f3a5-4e98-8618-5533f8436038.jpg"
                  alt="Интерьер салона"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ fontFamily: "Cormorant" }}
              >
                Интерьер салона
              </h3>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: "Open Sans" }}
              >
                Комфортная атмосфера
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                <img
                  src="/img/499e0f15-08cf-49f5-9f1e-46bcbd903a17.jpg"
                  alt="Маникюр работа 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ fontFamily: "Cormorant" }}
              >
                Маникюр
              </h3>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: "Open Sans" }}
              >
                Дизайн с золотыми акцентами
              </p>
            </div>

            {/* Additional placeholder items */}
            {[4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-beige to-gold-light rounded-lg overflow-hidden mb-4 shadow-md group-hover:shadow-lg transition-shadow flex items-center justify-center">
                  <Icon
                    name={item === 4 ? "Eye" : item === 5 ? "Hand" : "Sparkles"}
                    size={48}
                    className="text-gold-dark opacity-60"
                  />
                </div>
                <h3
                  className="text-lg font-semibold text-gray-900 mb-2"
                  style={{ fontFamily: "Cormorant" }}
                >
                  {item <= 4 ? "Наращивание ресниц" : "Маникюр"}
                </h3>
                <p
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: "Open Sans" }}
                >
                  {item <= 4 ? "Классическое наращивание" : "Гель-лак покрытие"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Cormorant" }}
            >
              Контакты и запись
            </h2>
            <p
              className="text-lg text-gray-600"
              style={{ fontFamily: "Open Sans" }}
            >
              Свяжитесь с нами для записи на услуги
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold rounded-md flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold text-gray-900"
                    style={{ fontFamily: "Cormorant" }}
                  >
                    Адрес
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    г. Москва, ул. Красоты, д. 15
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold rounded-md flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold text-gray-900"
                    style={{ fontFamily: "Cormorant" }}
                  >
                    Телефон
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    +7 (999) 123-45-67
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold rounded-md flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold text-gray-900"
                    style={{ fontFamily: "Cormorant" }}
                  >
                    Время работы
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    Пн-Сб: 9:00 - 21:00
                    <br />
                    Вс: 10:00 - 19:00
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-beige-light p-8 rounded-lg">
              <h3
                className="text-2xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "Cormorant" }}
              >
                Записаться на процедуру
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gold"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gold"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Услуга
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gold">
                    <option>Выберите услугу</option>
                    <option>Наращивание ресниц</option>
                    <option>Маникюр</option>
                    <option>Комплекс услуг</option>
                  </select>
                </div>
                <Button className="w-full bg-gold hover:bg-gold-dark text-white rounded-none py-4 text-lg">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-gold to-gold-dark rounded-md flex items-center justify-center">
                  <Icon name="Sparkles" size={20} className="text-white" />
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "Cormorant" }}
                >
                  Beauty Salon
                </h3>
              </div>
              <p className="text-gray-400" style={{ fontFamily: "Open Sans" }}>
                Профессиональные услуги красоты для создания вашего
                неповторимого образа.
              </p>
            </div>
            <div>
              <h4
                className="text-lg font-semibold mb-4"
                style={{ fontFamily: "Cormorant" }}
              >
                Услуги
              </h4>
              <ul
                className="space-y-2 text-gray-400"
                style={{ fontFamily: "Open Sans" }}
              >
                <li>Наращивание ресниц</li>
                <li>Маникюр и педикюр</li>
                <li>Дизайн ногтей</li>
                <li>Коррекция ресниц</li>
              </ul>
            </div>
            <div>
              <h4
                className="text-lg font-semibold mb-4"
                style={{ fontFamily: "Cormorant" }}
              >
                Социальные сети
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  <Icon name="Instagram" size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  <Icon name="MessageCircle" size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  <Icon name="Phone" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Beauty Salon. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
