from django.db import models

class Customer(models.Model):
    name = models.CharField(max_length=250, db_index=True)
    tel = models.CharField(max_length=250)
    email = models.EmailField(max_length=250)
    message = models.CharField(max_length=250)

    def __str__(self):
        return self.name + " " + self.tel