from django.db import models


class tb_Desenvolvedor(models.Model):
    dev_id = models.AutoField('id', primary_key=True)
    dev_nome = models.CharField('Nome', max_length=90)
    dev_contato = models.BigIntegerField('Contato')


class tb_Projeto(models.Model):
    prj_id = models.AutoField('id', primary_key=True)
    prj_nome = models.CharField('Nome', max_length=60)
    prj_escopo = models.CharField('Escopo', max_length=119)
    prj_datainicio = models.DateField('Data Inicio')
    prj_prazoentrega = models.DateField('Prazo de Entrega')


class tb_Tarefa(models.Model):
    trf_id = models.AutoField('id', primary_key=True)
    trf_name = models.CharField('nome', max_length=120, default='')
    trf_datainicial = models.DateField('Data Inicial')
    trf_datafinal = models.DateField('Data Final', null=True)
    trf_prazo = models.DateField('Prazo')
    trf_interdependencia = models.IntegerField('Interdenpencia', null=True)
    trf_entregavel = models.BooleanField('Entregavel', default=False)
    fk_prj_id = models.ForeignKey(tb_Projeto, on_delete=models.CASCADE)

    def __str__(self):
        return self.trf_name


class tb_Dev_Trf(models.Model):

    fk_dev_id = models.ForeignKey(tb_Desenvolvedor, on_delete=models.CASCADE)
    fk_trf_id = models.ForeignKey(tb_Tarefa, on_delete=models.CASCADE)
    class Meta:
        unique_together = (("fk_dev_id", "fk_trf_id"),)




# Create your models here.
