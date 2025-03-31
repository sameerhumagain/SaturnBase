from django.urls import path
from .views import (
    RegisterView,
    ActivateAccountView,
    CustomTokenObtainPairView,
    ForgotPasswordView,
    VerifyOtpView,
    ResetPasswordView,

    UserListCreateView,
    BulkUserUploadView,
    UserUpdateView,
    ActivityLogListCreateView
)

urlpatterns = [
    
    # User list and bulk upload
    path('', UserListCreateView.as_view(), name='user_list_create'),
    path('bulk-upload/', BulkUserUploadView.as_view(), name='bulk_user_upload'),
    path('<int:pk>/', UserUpdateView.as_view(), name='user_detail'),
    
    
    # User registration and authentication
    path('register/', RegisterView.as_view(), name='register'),
    path('activate/<str:uidb64>/<str:token>/', ActivateAccountView.as_view(), name='activate_account'),
    path('login/', CustomTokenObtainPairView.as_view(), name='login'),

    # Password reset flow
    path('forgot-password/', ForgotPasswordView.as_view(), name='forgot_password'),
    path('verify-otp/', VerifyOtpView.as_view(), name='verify_otp'),
    path('reset-password/', ResetPasswordView.as_view(), name='reset_password'),
    path('activity-logs/', ActivityLogListCreateView.as_view(), name='activity-log-list-create'),


]

