from django.contrib.auth import authenticate
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status, generics
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import vacancySerializer, companySerializer, vacancyModelSerializer
from .models import Vacancy, Company
from django.db.models import Q
import json

@csrf_exempt
def companies_list(request):  #FBV
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = companySerializer(companies, many = True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        print(data.get('name', ''))
        company = Company.objects.create(
            name = data.get('name', ''),
            email = data.get('email','')
            )
        serializer = companySerializer(company, many = False)
        return JsonResponse(serializer.data)

@csrf_exempt
def company_detail(request, company_id): #FBV
    try:
        company = Company.objects.get(id=company_id)
        company_json = company.to_json()
    except:
        return JsonResponse({'error': "Don't find id"})

    if request.method == 'GET':
        return JsonResponse(company_json)

    elif request.method == 'PUT':
        data = json.loads(request.body)
        print(data)

        name = data.get('name', '')
        email = data.get('email', '')

        company.name = name
        company.email = email
        company.save()

        return JsonResponse(company.to_json())

    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'delete': True})

def company_vacancies(request, company_id): #FBV
    vacancies = Vacancy.objects.filter(company_id=company_id)
    vacancies_json = [i.to_json() for i in vacancies]
    return JsonResponse(vacancies_json, safe=False)

class vacancies_list(APIView): #CBV
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = vacancySerializer(vacancies, many = True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        data = json.loads(request.body)
        company = Vacancy.objects.create(
            name = data.get('name', ''),
            experience = data.get('experience', ''),
            city = data.get('city', ''),
            location = data.get('location', ''),
            salary = data.get('salary', ''),
            description = data.get('description', ''),
            company_id = data.get('company', '')
            )
        serializer = vacancyModelSerializer(company, many = False)
        return JsonResponse(serializer.data)


class vacancy_detail(APIView): #CBV
    def get(self, request, vacancy_id):
        try:
            vacancy = Vacancy.objects.get(id=vacancy_id)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({"error": str(e)})

        serializer = vacancySerializer(vacancy, many=False)
        return JsonResponse(serializer.data, safe=False)

    def delete(self, request, vacancy_id):
        try:
            vacancy = Vacancy.objects.get(id=vacancy_id)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({"error": str(e)})

        vacancy.delete()
        return JsonResponse({"delete": "successful"})

    def put(self, request, vacancy_id):
        try:
            vacancy = Vacancy.objects.get(id=vacancy_id)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({"error": str(e)})

        data = json.loads(request.body)
        name = data.get('name', '')
        experience = data.get('experience', '')
        city = data.get('city', '')
        location = data.get('location', '')
        salary = data.get('salary', '')
        description = data.get('description', '')
        company_id = data.get('company', '')

        vacancy.name = name
        vacancy.experience = experience
        vacancy.city = city
        vacancy.location = location
        vacancy.salary = salary
        vacancy.description = description
        vacancy.company_id = company_id
        vacancy.save()

        serializer = vacancyModelSerializer(vacancy, many=False)
        return JsonResponse(serializer.data)

def search_vacancies(request): #FBV
    query = request.GET.get('q', '')
    results = Vacancy.objects.filter(Q(name__icontains=query))
    data = [v.to_json() for v in results]
    return JsonResponse(data, safe=False)

def search_companies(request): #FBV
    query2 = request.GET.get('q', '')
    results = Company.objects.filter(Q(name__icontains=query2))
    data = [v.to_json() for v in results]
    return JsonResponse(data, safe=False)



# class SignUpView(generics.GenericAPIView):
#     serializer_class = SignUpSerializer
#     permission_classes = []
#
#     def post(self, request: Request):
#         data = request.data
#         serializer = self.serializer_class(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             response = {"message": "User Created Successfully", "data": serializer.data}
#             return Response(data=response, status=status.HTTP_201_CREATED)
#         return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#
# class LoginView(APIView):
#     permission_classes = []
#
#     def post(self, request: Request):
#         email = request.data.get("email")
#         password = request.data.get("password")
#         user = authenticate(email=email, password=password)
#         if user is not None:
#             tokens = create_jwt_pair_for_user(user)
#             response = {"message": "Login Successfull", "tokens": tokens}
#             return Response(data=response, status=status.HTTP_200_OK)
#         else:
#             return Response(data={"message": "Invalid email or password"})
#
#     def get(self, request: Request):
#         content = {"user": str(request.user), "auth": str(request.auth)}
#         return Response(data=content, status=status.HTTP_200_OK)
