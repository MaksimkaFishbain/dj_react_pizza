from django.test import TestCase
from .models import Image
from django.core.files import File
# Create your tests here.

class ImageModelTest(TestCase):

    def test_images_model_save_and_retrieve(self):
        image1 = Image(
            title= "image1",
            image=File(open('frontend/public/images/pizzaFourSesons.png','rb'))
        )
        image1.save()

        image2 = Image(
             title='image2',
             image=File(open('frontend/public/images/pizzaPeperoni.png','rb'))
        )
        image2.save()

        all_Images = Image.objects.all()

        self.assertEqual(len(all_Images),2)
        self.assertEqual(
            all_Images[0].title, image1.title
        )
        self.assertEqual(
            all_Images[0].image, image1.image
        )
        self.assertEqual(
            all_Images[1].title, image2.title
        )
        self.assertEqual(
             all_Images[1].image, image2.image
        )


