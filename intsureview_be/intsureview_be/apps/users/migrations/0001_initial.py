# Generated by Django 4.1.9 on 2023-07-09 17:39

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=50)),
                (
                    "date_of_birth",
                    models.DateField(blank=True, max_length=8, null=True),
                ),
                ("email", models.EmailField(max_length=70)),
                (
                    "frequency_of_emails",
                    models.CharField(
                        choices=[
                            ("DAILY", "daily"),
                            ("WEEKLY", "weekly"),
                            ("SEMI-MONTHLY", "semi-monthly"),
                            ("MONTHLY", "monthly"),
                        ],
                        max_length=50,
                    ),
                ),
                (
                    "receive_promotional_emails",
                    models.BooleanField(
                        choices=[(False, "No"), (True, "Yes")], default=False
                    ),
                ),
            ],
        ),
    ]
