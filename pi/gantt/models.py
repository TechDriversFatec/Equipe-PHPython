from django.db import models


class tb_Desenvolvedor(models.Model):
    dev_id = models.AutoField(primary_key=True)
    dev_nome = models.CharField(max_length=90)
    dev_contato = models.BigIntegerField()


class tb_Projeto(models.Model):
    prj_id = models.AutoField(primary_key=True)
    prj_nome = models.CharField(max_length=60)
    prj_escopo = models.CharField(max_length=119)
    prj_datainicio = models.DateField()
    prj_prazoentrega = models.DateField()


class tb_Tarefa(models.Model):
    trf_id = models.AutoField(primary_key=True)
    trf_datainicial = models.DateField()
    trf_datafinal = models.DateField(null=True)
    trf_prazo = models.DateField()
    trf_interdependencia = models.IntegerField(null=True)
    trf_entregavel = models.BooleanField(default=False)
    fk_prj_id = models.ForeignKey(tb_Projeto, on_delete=models.CASCADE)


class tb_Dev_Trf(models.Model):

    fk_dev_id = models.ForeignKey(tb_Desenvolvedor, on_delete=models.CASCADE)
    fk_trf_id = models.ForeignKey(tb_Tarefa, on_delete=models.CASCADE)
    class Meta:
        unique_together = (("fk_dev_id", "fk_trf_id"),)




# Create your models here.
