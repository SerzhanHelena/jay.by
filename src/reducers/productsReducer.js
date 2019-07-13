// import kukuruza from '../images/products/kukuruza.png';
import salt from '../images/products/salt.png';
import koktel from '../images/products/kokteyl.png';
import stevia from '../images/products/stevia.png';
import travy from '../images/products/travy.png';
import grechka from '../images/products/grechka.png';
import bzhu_grechka from '../images/theNutritionalValue/bzhu_grechka.png';
import bzhu_koritsa_i_stevia from '../images/theNutritionalValue/bzhu_koritsa_i_stevia.png';
import bzhu_provanskie_travy from '../images/theNutritionalValue/bzhu_provanskie_travy.png';
import bzhu_solnechnaya_kukuruza from '../images/theNutritionalValue/bzhu_solnechnaya_kukuruza.png';
import bzhu_zlakovy_kokteyl from '../images/theNutritionalValue/bzhu_zlakovy_kokteyl.png';

const initialState = [
	{
        id: 1,
        title: 'Хлебцы Jay хрустящие, злаковый коктейль',
          composition: `крупа кукурузная, крупа рисовая, крупа гречневая, пшено шлифованное, семя
          льна, соль морская.`,
          value: bzhu_zlakovy_kokteyl,
        nutritionalValue: {
            proteins: 9.0,
            fats: 1.5,
            carbohydrates: 75.0,
            energyValue: {
                calories: 350,
                enegry: 1465.4
            }
        },
        img: koktel,
        weight: 65,
        expirationDate: 6

    },
    {
        id: 2,
        title: 'Хлебцы Jay хрустящие, ароматные прованские травы',
        composition: `крупа кукурузная, крупа рисовая, специи «Прованские травы» (базилик, розмарин,
            майоран, орегано, тимьян, мята), соль морская.`,
            value: bzhu_provanskie_travy,
        nutritionalValue: {
            proteins: 8.0,
            fats: 1.0,
            carbohydrates: 76.0,
            energyValue: {
                calories: 350,
                enegry: 1465.4
            }
        },
        img: travy,
        weight: 60,
        expirationDate: 6

    },
    {
        id: 3,
        title: 'Хлебцы Jay хрустящие, гречневые',
        composition: `крупа гречневая, соль морская.`,
        value: bzhu_grechka,
        nutritionalValue: {
            proteins: 14.0,
            fats: 2.5,
            carbohydrates: 74.0,
            energyValue: {
                calories: 380,
                enegry: 1590.9
            }
        },
        img: grechka,
        weight: 55,
        expirationDate: 6

    },
    {
        id: 4,
        title: 'Хлебцы Jay хрустящие, солнечная кукуруза',
        composition: `крупа кукурузная, крупа рисовая, корица, пищевая добавка, подсластитель
        экстракт Стевии.`,
        value: bzhu_solnechnaya_kukuruza,
        nutritionalValue: {
            proteins: 9.0,
            fats: 1.0,
            carbohydrates: 77.0,
            energyValue:  {
                calories: 350,
                enegry: 1465.4
            }
        },
        img: salt,
        weight: 65,
        expirationDate: 6

    },
    {
        id: 5,
        title: 'Хлебцы Jay хрустящие, ароматная корица и стевия',
        composition: `крупа кукурузная, соль морская.`,
        value: bzhu_koritsa_i_stevia,
        nutritionalValue: {
            proteins: 8.0,
            fats: 1.0,
            carbohydrates: 76.0,
            energyValue: {
                calories: 340,
                enegry: 1423.5
            }
        },
        img: stevia,
        weight: 60,
        expirationDate: 6

    }
];

export function products(state = initialState) {
	return state
}