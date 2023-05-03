from rest_framework import serializers
from api.models import Vacancy, Company

class companySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    email = serializers.CharField()

class companyModelSerializer(serializers.ModelSerializer):
    class meta:
        model = Company
        fields = '__all__'

class vacancySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    experience = serializers.IntegerField()
    city = serializers.CharField()
    location = serializers.CharField()
    salary = serializers.IntegerField()
    description = serializers.CharField()

class vacancyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'