from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

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