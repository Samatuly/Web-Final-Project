from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework.validators import ValidationError
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



# class SignUpSerializer(serializers.ModelSerializer):
#     email = serializers.CharField(max_length=80)
#     username = serializers.CharField(max_length=45)
#     password = serializers.CharField(min_length=8, write_only=True)
#
#     class Meta:
#         model = User
#         fields = ["email", "username", "password"]
#
#     def validate(self, attrs):
#         email_exists = User.objects.filter(email=attrs["email"]).exists()
#         if email_exists:
#             raise ValidationError("Email has already been used")
#         return super().validate(attrs)

#     def create(self, validated_data):
#         password = validated_data.pop("password")
#         user = super().create(validated_data)
#         user.set_password(password)
#         user.save()
#         Token.objects.create(user=user)
#         return user
#
# class CurrentUserPostsSerializer(serializers.ModelSerializer):
#     posts = serializers.HyperlinkedRelatedField(
#         many=True, view_name="post_detail", queryset=User.objects.all()
#     )
#
#     class Meta:
#         model = User
#         fields = ["id", "username", "email", "posts"]