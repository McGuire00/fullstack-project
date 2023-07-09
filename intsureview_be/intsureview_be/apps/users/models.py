from django.db import models
from django.forms import ModelForm


class User(models.Model):
    RECEIVE_PROMO_CHOICES = ((False, "No"), (True, "Yes"))
    FREQUENCY_CHOICES = (
        ("DAILY", "daily"),
        ("WEEKLY", "weekly"),
        ("SEMI-MONTHLY", "semi-monthly"),
        ("MONTHLY", "monthly"),
    )

    name = models.CharField(max_length=50)
    date_of_birth = models.DateField(max_length=8, null=True, blank=True)
    email = models.EmailField(max_length=70)
    frequency_of_emails = models.CharField(max_length=50, choices=FREQUENCY_CHOICES)
    receive_promotional_emails = models.BooleanField(default=False, choices=RECEIVE_PROMO_CHOICES)

    def __str__(self):
        return self.name


class UserForm(ModelForm):
    class Meta:
        model = User
        fields = "__all__"
