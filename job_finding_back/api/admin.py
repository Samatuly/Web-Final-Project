from django.contrib import admin
from api.models import Company, Vacancy

@admin.register(Company)
class AdminCompany(admin.ModelAdmin):
    list_display = ('id', 'name', 'email')

@admin.register(Vacancy)
class AdminVacancy(admin.ModelAdmin):
    list_display = ('id', 'name', 'experience', 'city', 'location', 'salary', 'description', 'company')