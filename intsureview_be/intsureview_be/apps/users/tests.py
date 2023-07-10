# from django.test import TestCase
# from rest_framework.test import APITestCase
# from .models import User
# from .api.users.query.base import UserSerializer
#
#
# class UserSerializerTestCase(TestCase):
#     def test_user_serializer(self):
#         # Create a User object
#         user_data = {
#             "name": "John Doe",
#             "date_of_birth": "1990-01-01",
#             "email": "john@example.com",
#             "frequency_of_emails": "DAILY",
#             "receive_promotional_emails": True,
#         }
#         user = User.objects.create(**user_data)
#
#         # Initialize the serializer with the User object
#         serializer = UserSerializer(instance=user)
#
#         # Assert that the serializer's data matches the expected data
#         expected_data = {
#             "id": user.id,
#             "name": "John Doe",
#             "date_of_birth": "1990-01-01",
#             "email": "john@example.com",
#             "frequency_of_emails": "DAILY",
#             "receive_promotional_emails": True,
#         }
#         self.assertEqual(serializer.data, expected_data)
#
#
# class UserViewSetTestCase(APITestCase):
#     def setup(self):
#         # Create a User object
#         user_data = {
#             "name": "John Doe",
#             "date_of_birth": "1990-01-01",
#             "email": "john@example.com",
#             "frequency_of_emails": "DAILY",
#             "receive_promotional_emails": True,
#         }
#         self.user = User.objects.create(**user_data)
#
#     def test_user_list(self):
#         # Send a GET request to the user list endpoint
#         response = self.client.get('http://localhost:8000/api/v1/newsletters/recipients/')
#
#         # Assert that the response status code is 200 (OK)
#         self.assertEqual(response.status_code, 200)
#
#         # Assert that the response data contains the user's name
#         self.assertContains(response, self.user.name)
#
#     def test_user_detail(self):
#         # Send a GET request to the user detail endpoint
#         response = self.client.get(f'http://localhost:8000/api/v1/newsletters/recipients/{self.user.id}/')
#
#         # Assert that the response status code is 200 (OK)
#         self.assertEqual(response.status_code, 200)
#
#         # Assert that the response data contains the user's email
#         self.assertContains(response, self.user.email)