import Aluno from '../models/Aluno';
import Upload from '../models/Upload';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'peso', 'idade', 'altura'],
      order: [['id', 'DESC'], [Upload, 'id', 'DESC']],
      include: {
        model: Upload,
        attributes: ['filename', 'id', 'url'],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      const {
        id, nome, sobrenome, email, idade, peso, altura,
      } = aluno;
      res.json({
        id, nome, sobrenome, email, idade, peso, altura,
      });
    } catch (err) {
      res.status(500).json({ error: err.errors.map((e) => e.message) });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(404).json({ error: 'ID não informado' });
      }
      const aluno = await Aluno.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'peso', 'idade', 'altura'],
        order: [[Upload, 'id', 'DESC']],
        include: {
          model: Upload,
          attributes: ['filename', 'id', 'url'],
        },
      });

      if (!aluno) {
        return res.status(404).json({ error: 'Aluno não encontrado' });
      }

      res.json(aluno);
    } catch (err) {
      res.status(500).json({ error: err.errors.map((e) => e.message) });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(404).json({ error: 'ID não informado' });
      }
      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(404).json({ error: 'Aluno não encontrado' });
      }

      await aluno.destroy();

      res.json({
        message: 'Aluno excluído com sucesso!',
      });
    } catch (err) {
      res.status(500).json({ error: err.errors.map((e) => e.message) });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(404).json({ error: 'ID não informado' });
      }
      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(404).json({ error: 'Aluno não encontrado' });
      }

      const alunoAtualizado = await aluno.update(req.body);

      const {
        id, nome, sobrenome, email, idade, peso, altura,
      } = alunoAtualizado;

      res.json({
        id, nome, sobrenome, email, idade, peso, altura,
      });
    } catch (err) {
      res.status(500).json({ error: err.errors.map((e) => e.message) });
    }
  }
}

export default new AlunoController();
