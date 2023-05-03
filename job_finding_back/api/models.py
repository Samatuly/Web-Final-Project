from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth import get_user_model


class Company(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = "Companies"

    def __str__(self) -> str:
        return f'id = {self.id}, name = {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    experience = models.IntegerField()
    city = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    salary = models.IntegerField()
    description = models.TextField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = "Vacancies"

    def to_json(self):
        return {
            'id':self.id,
            'name':self.name,
            'experience':self.experience,
            'city':self.city,
            'location':self.location,
            'salary': self.salary,
            'description':self.description,
            'company_id': self.company_id
        }



# class CustomUserManager(BaseUserManager):
#     def create_user(self, email, password, **extra_fields):
#         email = self.normalize_email(email)
#
#         user = self.model(email=email, **extra_fields)
#
#         user.set_password(password)
#
#         user.save()
#
#         return user
#
#     def create_superuser(self, email, password, **extra_fields):
#         extra_fields.setdefault("is_staff", True)
#         extra_fields.setdefault("is_superuser", True)
#
#         if extra_fields.get("is_staff") is not True:
#             raise ValueError("Superuser has to have is_staff being True")
#
#         if extra_fields.get("is_superuser") is not True:
#             raise ValueError("Superuser has to have is_superuser being True")
#
#         return self.create_user(email=email, password=password, **extra_fields)
#
#
# class User(AbstractUser):
#     email = models.CharField(max_length=80, unique=True)
#     username = models.CharField(max_length=45)
#     date_of_birth = models.DateField(null=True)
#
#     objects = CustomUserManager()
#     USERNAME_FIELD = "email"
#     REQUIRED_FIELDS = ["username"]
#
#     def __str__(self):
#         return self.username

