import kukuruza from '../images/products/kukuruza.png';

  

const initialState = [
	{
        id: 1,
        title: 'Хлебцы Jay хрустящие злаковый коктейль',
        description: `В состав хлебцев входит большое количество углеводов,
         которые отвечают за выработку энергии и правильное функционирование всех систем и органов.
          Также в составе хлебцев много витаминов, минералов и микроэлементов.

        Хлебцы кукурузные в настоящее время пользуются широкой популярностью,
         в особенности среди спортсменов и людей, которые ведут здоровый образ жизни.
          Кукурузные хлебцы – это очень вкусный и полезный продукт, так как он полностью без глютена.`,
          composition: `крупа кукурузная, крупа рисовая, крупа гречневая, пшено шлифованное, семя
          льна, соль морская.`,
        nutritionalValue: {
            proteins: 9.0,
            fats: 1.5,
            carbohydrates: 75.0,
            energyValue: {
                calories: 350,
                enegry: 1465.4
            }
        },
        img: kukuruza
    },
    {
        id: 2,
        title: 'Хлебцы Jay хрустящие, ароматные прованские травы',
        description: `В состав хлебцев входит большое количество углеводов, которые отвечают за выработку энергии и правильное функционирование всех систем и органов. Также в составе хлебцев много витаминов, минералов и микроэлементов.

        Хлебцы кукурузные в настоящее время пользуются широкой популярностью, в особенности среди спортсменов и людей, которые ведут здоровый образ жизни. Кукурузные хлебцы – это очень вкусный и полезный продукт, так как он полностью без глютена.`,
        composition: `крупа кукурузная, крупа рисовая, специи «Прованские травы» (базилик, розмарин,
            майоран, орегано, тимьян, мята), соль морская.`,
        nutritionalValue: {
            proteins: 8.0,
            fats: 1.0,
            carbohydrates: 76.0,
            energyValue: {
                calories: 350,
                enegry: 1465.4
            }
        },
        img: kukuruza
    },
    {
        id: 3,
        title: 'Хлебцы Jay хрустящие, гречневые',
        description: `В состав хлебцев входит большое количество углеводов, которые отвечают за выработку энергии и правильное функционирование всех систем и органов. Также в составе хлебцев много витаминов, минералов и микроэлементов.

        Хлебцы кукурузные в настоящее время пользуются широкой популярностью, в особенности среди спортсменов и людей, которые ведут здоровый образ жизни. Кукурузные хлебцы – это очень вкусный и полезный продукт, так как он полностью без глютена.`,
        composition: `крупа гречневая, соль морская.`,
        nutritionalValue: {
            proteins: 14.0,
            fats: 2.5,
            carbohydrates: 74.0,
            energyValue: {
                calories: 380,
                enegry: 1590.9
            }
        },
        img: kukuruza
    },
    {
        id: 4,
        title: 'Хлебцы Jay хрустящие солнечная кукуруза',
        description: `В состав хлебцев входит большое количество углеводов, которые отвечают за выработку энергии и правильное функционирование всех систем и органов. Также в составе хлебцев много витаминов, минералов и микроэлементов.

        Хлебцы кукурузные в настоящее время пользуются широкой популярностью, в особенности среди спортсменов и людей, которые ведут здоровый образ жизни. Кукурузные хлебцы – это очень вкусный и полезный продукт, так как он полностью без глютена.`,
        composition: `крупа кукурузная, крупа рисовая, корица, пищевая добавка, подсластитель
        экстракт Стевии.`,
        nutritionalValue: {
            proteins: 9.0,
            fats: 1.0,
            carbohydrates: 77.0,
            energyValue:  {
                calories: 350,
                enegry: 1465.4
            }
        },
        img: kukuruza
    },
    {
        id: 5,
        title: 'Хлебцы Jay хрустящие, ароматная корица и стевия',
        description: `В состав хлебцев входит большое количество углеводов, которые отвечают за выработку энергии и правильное функционирование всех систем и органов. Также в составе хлебцев много витаминов, минералов и микроэлементов.

        Хлебцы кукурузные в настоящее время пользуются широкой популярностью, в особенности среди спортсменов и людей, которые ведут здоровый образ жизни. Кукурузные хлебцы – это очень вкусный и полезный продукт, так как он полностью без глютена.`,
        composition: `крупа кукурузная, соль морская.`,
        nutritionalValue: {
            proteins: 8.0,
            fats: 1.0,
            carbohydrates: 76.0,
            energyValue: {
                calories: 340,
                enegry: 1423.5
            }
        },
        img: kukuruza
    }
];

export function products(state = initialState) {
	return state
}